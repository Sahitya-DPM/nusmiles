import { BlogPost } from '../types/blog';
import { expandRawCodeBlocks, extractSchemasFromRawCode } from './rawCode';
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  BUSINESS_ALTERNATE_NAMES,
  BUSINESS_NAME,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  LOGO_URL,
  PHONE_E164,
  POSTAL_CODE,
  SAME_AS,
  SITE_URL,
  STREET_ADDRESS,
} from './site';
import { dentalImplantFaqs } from './dentalImplantFaqs';

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

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: STREET_ADDRESS,
    addressLocality: ADDRESS_LOCALITY,
    addressRegion: ADDRESS_REGION,
    postalCode: POSTAL_CODE,
    addressCountry: ADDRESS_COUNTRY,
  };
}

function dentistOrganization() {
  return {
    '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#dentist`,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_ALTERNATE_NAMES,
    url: `${SITE_URL}/`,
    telephone: PHONE_E164,
    image: LOGO_URL,
    logo: LOGO_URL,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    sameAs: SAME_AS,
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Stockton',
      addressRegion: 'CA',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday'],
        opens: '09:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '09:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:00',
      },
    ],
  };
}

export function buildHomeBrandSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      dentistOrganization(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: BUSINESS_NAME,
        alternateName: BUSINESS_ALTERNATE_NAMES,
        publisher: { '@id': `${SITE_URL}/#dentist` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: `${BUSINESS_NAME} | Family Dentist in Stockton, CA`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#dentist` },
      },
    ],
  };
}

export function buildDentalImplantPageSchema() {
  const pageUrl = `${SITE_URL}/dental-implants`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...dentistOrganization(),
        medicalSpecialty: 'https://schema.org/Dentistry',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dental implants in Stockton',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Dental Implants in Stockton, CA',
                url: pageUrl,
              },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Dental Implants in Stockton, CA | NuSmile Dental',
        description:
          'Dental implants in Stockton, CA at NuSmile Dental. Permanent tooth replacement with transparent pricing and a free consultation.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: {
          '@type': 'MedicalProcedure',
          name: 'Dental implants',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Dental Implants in Stockton',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: dentalImplantFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
