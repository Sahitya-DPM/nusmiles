import { BlogPost } from '../types/blog';
import {
  buildDefaultBlogSchema,
  extractSchemaFromHtml,
  normalizeSchemaCode,
} from '../lib/schema';

type StructuredDataProps = {
  post?: BlogPost | null;
  canonicalUrl?: string;
  jsonLdCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
};

export default function StructuredData({
  post,
  canonicalUrl,
  jsonLdCode,
  breadcrumbCode,
  faqCode,
  medicalConditionCode,
}: StructuredDataProps) {
  const blocks: { id: string; code: string }[] = [];

  let primaryJsonLd = normalizeSchemaCode(jsonLdCode);

  if (!primaryJsonLd && post?.content) {
    const embeddedSchemas = extractSchemaFromHtml(post.content);
    if (embeddedSchemas.length > 0) {
      primaryJsonLd = embeddedSchemas[0];
      embeddedSchemas.slice(1).forEach((code, index) => {
        blocks.push({ id: `embedded-${index}`, code });
      });
    }
  }

  if (!primaryJsonLd && post && canonicalUrl) {
    primaryJsonLd = buildDefaultBlogSchema(post, canonicalUrl);
  }

  if (primaryJsonLd) {
    blocks.unshift({ id: 'json-ld', code: primaryJsonLd });
  }

  const optionalBlocks = [
    { id: 'breadcrumb', code: normalizeSchemaCode(breadcrumbCode) },
    { id: 'faq', code: normalizeSchemaCode(faqCode) },
    { id: 'medical-condition', code: normalizeSchemaCode(medicalConditionCode) },
  ];

  for (const block of optionalBlocks) {
    if (block.code) {
      blocks.push({ id: block.id, code: block.code });
    }
  }

  if (blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map(({ id, code }) => (
        <script
          key={id}
          type="application/ld+json"
          data-structured-data={id}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      ))}
    </>
  );
}
