export const RAW_CODE_TYPE = 'raw-code';

export const CODE_LANGUAGE_OPTIONS = [
  { value: 'auto', label: 'Auto-detect' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'json', label: 'JSON' },
  { value: 'json-ld', label: 'JSON-LD / Schema' },
  { value: 'other', label: 'Other' },
] as const;

export type CodeLanguage = (typeof CODE_LANGUAGE_OPTIONS)[number]['value'];

export function encodeRawCode(code: string): string {
  return encodeURIComponent(code);
}

export function decodeRawCode(encoded: string): string {
  try {
    return decodeURIComponent(encoded);
  } catch {
    return encoded;
  }
}

function looksLikeJson(value: string): boolean {
  const trimmed = value.trim();
  return (trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'));
}

export function detectCodeLanguage(code: string): Exclude<CodeLanguage, 'auto'> {
  const trimmed = code.trim();
  if (!trimmed) {
    return 'html';
  }

  if (/<script[^>]*type=["']application\/ld\+json["']/i.test(trimmed)) {
    return 'json-ld';
  }

  if (/^<style[\s>]/i.test(trimmed) || (/[{;:]/.test(trimmed) && /[.#a-z][\w-]*\s*\{/.test(trimmed) && !trimmed.includes('<') && !looksLikeJson(trimmed))) {
    return 'css';
  }

  if (/^<script[\s>]/i.test(trimmed)) {
    return 'javascript';
  }

  if (looksLikeJson(trimmed)) {
    return /["']@context["']/.test(trimmed) ? 'json-ld' : 'json';
  }

  if (trimmed.startsWith('<')) {
    return 'html';
  }

  if (/(?:\bfunction\b|\bconst\b|\blet\b|\bvar\b|=>|console\.)/.test(trimmed)) {
    return 'javascript';
  }

  return 'other';
}

export function resolveCodeLanguage(language: string, code: string): Exclude<CodeLanguage, 'auto'> {
  if (!language || language === 'auto') {
    return detectCodeLanguage(code);
  }

  if (language === 'html' || language === 'css' || language === 'javascript' || language === 'json' || language === 'json-ld' || language === 'other') {
    return language;
  }

  return 'other';
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function alreadyWrapped(code: string, tag: string): boolean {
  const pattern = new RegExp(`^<${tag}[\\s>]`, 'i');
  return pattern.test(code.trim());
}

export function wrapCodeForOutput(language: string, code: string): string {
  const resolved = resolveCodeLanguage(language, code);
  const trimmed = code.trim();

  switch (resolved) {
    case 'html':
      return trimmed;
    case 'css':
      return alreadyWrapped(trimmed, 'style') ? trimmed : `<style>${trimmed}</style>`;
    case 'javascript':
      return alreadyWrapped(trimmed, 'script') ? trimmed : `<script>${trimmed}</script>`;
    case 'json-ld':
      return /<script[\s>]/i.test(trimmed)
        ? trimmed
        : `<script type="application/ld+json">${trimmed}</script>`;
    case 'json':
    case 'other':
    default:
      return `<pre class="blog-code-block"><code>${escapeHtml(code)}</code></pre>`;
  }
}

function getAttribute(tag: string, name: string): string | null {
  const doubleQuoted = tag.match(new RegExp(`${name}="([^"]*)"`, 'i'));
  if (doubleQuoted) {
    return doubleQuoted[1];
  }

  const singleQuoted = tag.match(new RegExp(`${name}='([^']*)'`, 'i'));
  if (singleQuoted) {
    return singleQuoted[1];
  }

  return null;
}

export function extractRawCodeFromTag(tag: string): { language: string; code: string } | null {
  const type = getAttribute(tag, 'data-type');
  if (type !== RAW_CODE_TYPE) {
    return null;
  }

  const encoded = getAttribute(tag, 'data-code');
  if (!encoded) {
    return null;
  }

  return {
    language: getAttribute(tag, 'data-language') || 'html',
    code: decodeRawCode(encoded),
  };
}

export function expandRawCodeBlocks(html: string): string {
  if (!html || !html.includes('data-type')) {
    return html;
  }

  return html.replace(
    /<div\b([^>]*\bdata-type=(["'])raw-code\2[^>]*)>(?:\s*)<\/div>/gi,
    (fullMatch, attrs: string) => {
      const encoded = getAttribute(attrs, 'data-code');
      const language = getAttribute(attrs, 'data-language') || 'html';
      const code = encoded ? decodeRawCode(encoded) : '';

      if (!code.trim()) {
        return fullMatch;
      }

      return `<div data-type="${RAW_CODE_TYPE}" data-language="${escapeHtml(language)}" class="raw-code-block">${wrapCodeForOutput(language, code)}</div>`;
    }
  );
}

export function extractSchemasFromRawCode(html: string): string[] {
  if (!html) {
    return [];
  }

  const schemas: string[] = [];
  const tagMatches = html.matchAll(/<div\b[^>]*\bdata-type=(["'])raw-code\1[^>]*>/gi);

  for (const match of tagMatches) {
    const extracted = extractRawCodeFromTag(match[0]);
    if (!extracted) {
      continue;
    }

    const language = resolveCodeLanguage(extracted.language, extracted.code);
    if (language === 'json-ld' || (language === 'html' && /application\/ld\+json/i.test(extracted.code))) {
      schemas.push(extracted.code);
    }
  }

  return schemas;
}
