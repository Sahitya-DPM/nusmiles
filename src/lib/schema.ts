import { BlogPost } from '../types/blog';
import { SITE_URL } from './site';

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
export function normalizeSchemaCode(raw: string | undefined): string | null {
  if (!raw?.trim()) {
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
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.description || post.excerpt || '',
    datePublished: post.publishDate,
    dateModified:
      post.updatedAt instanceof Date
        ? post.updatedAt.toISOString().split('T')[0]
        : post.updatedAt
          ? new Date(post.updatedAt).toISOString().split('T')[0]
          : post.publishDate,
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
  const matches = html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );

  for (const match of matches) {
    const normalized = normalizeSchemaCode(match[1]);
    if (normalized) {
      schemas.push(normalized);
    }
  }

  return schemas;
}
