export const RAW_CODE_TYPE = 'raw-code';

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

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

export function extractRawCodeFromTag(tag: string): string | null {
  const type = getAttribute(tag, 'data-type');
  if (type !== RAW_CODE_TYPE) {
    return null;
  }

  const encoded = getAttribute(tag, 'data-code');
  if (!encoded) {
    return null;
  }

  return decodeRawCode(encoded);
}

export function expandRawCodeBlocks(html: string): string {
  if (!html || !html.includes('data-type')) {
    return html;
  }

  return html.replace(
    /<div\b([^>]*\bdata-type=(["'])raw-code\2[^>]*)>(?:\s*)<\/div>/gi,
    (fullMatch, attrs: string) => {
      const encoded = getAttribute(attrs, 'data-code');
      const code = encoded ? decodeRawCode(encoded) : '';

      if (!code.trim()) {
        return fullMatch;
      }

      return `<div data-type="${RAW_CODE_TYPE}" class="raw-code-block">${code}</div>`;
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
    const code = extractRawCodeFromTag(match[0]);
    if (code) {
      schemas.push(code);
    }
  }

  return schemas;
}
