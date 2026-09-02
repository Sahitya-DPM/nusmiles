import { BlogPost } from '../types/blog';
import { expandRawCodeBlocks, extractSchemasFromRawCode } from './rawCode';
import { SITE_URL } from './site';

type FirestoreTimestampLike = {
  toDate?: () => Date;
  seconds?: number;
};

function formatBlogDate(value: unknown, fallback: string): string {
  if (!value) {
    return fallback;
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? fallback : value.toISOString().split('T')[0];
  }

  if (typeof value === 'object' && value !== null) {
    const timestamp = value as FirestoreTimestampLike;

    if (typeof timestamp.toDate === 'function') {
      const date = timestamp.toDate();
      return Number.isNaN(date.getTime()) ? fallback : date.toISOString().split('T')[0];
    }

    if (typeof timestamp.seconds === 'number') {
      const date = new Date(timestamp.seconds * 1000);
      return Number.isNaN(date.getTime()) ? fallback : date.toISOString().split('T')[0];
    }
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? fallback : date.toISOString().split('T')[0];
  }

  return fallback;
}

function stripScriptWrapper(code: string): string {
  const wrapped = code.match(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i
  );
  if (wrapped) {
    return wrapped[1].trim();
  }

  if (/^<script/i.test(code)) {
    return code.replace(/^<script[^>]*>/i, '').replace(/<\/script>$/i, '').trim();
  }

  return code;
}

function fixDoubledQuotes(code: string): string {
  if (!code.includes('""')) {
    return code;
  }

  return code.replace(/""/g, '"');
}

function tryParseJson(code: string): unknown | null {
  try {
    return JSON.parse(code);
  } catch {
    return null;
  }
}

function extractJsonPayload(code: string): string | null {
  const objectMatch = code.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
  if (!objectMatch) {
    return null;
  }

  const candidate = objectMatch[1];
  return tryParseJson(candidate) ? candidate : null;
}

/**
 * Normalizes admin-provided schema that may be pasted as raw JSON,
 * a JSON-encoded string, or a full <script> tag with escaped quotes.
 */
export function normalizeSchemaCode(raw: unknown): string | null {
  if (raw == null) {
    return null;
  }

  if (typeof raw === 'object') {
    try {
      return JSON.stringify(raw);
    } catch {
      return null;
    }
  }

  if (typeof raw !== 'string' || !raw.trim()) {
    return null;
  }

  let code = stripScriptWrapper(raw.trim());

  if (code.startsWith('"')) {
    const unwrapped = tryParseJson(code);
    if (typeof unwrapped === 'string') {
      code = stripScriptWrapper(unwrapped.trim());
    }
  }

  code = fixDoubledQuotes(code);

  let parsed = tryParseJson(code);
  if (!parsed) {
    const extracted = extractJsonPayload(code);
    if (!extracted) {
      return null;
    }
    parsed = tryParseJson(extracted);
  }

  if (!parsed) {
    return null;
  }

  return JSON.stringify(parsed);
}

export function buildDefaultBlogSchema(post: BlogPost, canonicalUrl: string): string {
  const publishDate = formatBlogDate(post.publishDate, new Date().toISOString().split('T')[0]);
  const modifiedDate = formatBlogDate(post.updatedAt, publishDate);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.description || post.excerpt || '',
    datePublished: publishDate,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NuSmile Dental',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.png`,
      },
    },
  };

  const image = post.ogImageUrl || post.imageUrl;
  if (image) {
    schema.image = image;
  }

  if (post.author) {
    schema.author = {
      '@type': 'Person',
      name: post.author,
    };
  }

  return JSON.stringify(schema);
}

export function extractSchemaFromHtml(html: string | undefined): string[] {
  if (!html?.trim()) {
    return [];
  }

  const schemas: string[] = [];
  const seen = new Set<string>();
  const expandedHtml = expandRawCodeBlocks(html);
  const matches = expandedHtml.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );

  const addSchema = (raw: string) => {
    const normalized = normalizeSchemaCode(raw);
    if (normalized && !seen.has(normalized)) {
      seen.add(normalized);
      schemas.push(normalized);
    }
  };

  for (const match of matches) {
    addSchema(match[1]);
  }

  for (const raw of extractSchemasFromRawCode(html)) {
    addSchema(raw);
  }

  return schemas;
}
