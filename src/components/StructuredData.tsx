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
  blogPostingCode?: string;
  personCode?: string;
  dentistCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
  howToCode?: string;
};

export default function StructuredData({
  post,
  canonicalUrl,
  jsonLdCode,
  blogPostingCode,
  personCode,
  dentistCode,
  breadcrumbCode,
  faqCode,
  medicalConditionCode,
  howToCode,
}: StructuredDataProps) {
  try {
    const blocks: { id: string; code: string }[] = [];

    let primaryJsonLd = normalizeSchemaCode(jsonLdCode) || normalizeSchemaCode(blogPostingCode);

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

    const normalizedBlogPosting = normalizeSchemaCode(blogPostingCode);
    if (normalizedBlogPosting && normalizedBlogPosting !== primaryJsonLd) {
      blocks.push({ id: 'blog-posting', code: normalizedBlogPosting });
    }

    const optionalBlocks = [
      { id: 'person', code: normalizeSchemaCode(personCode) },
      { id: 'dentist', code: normalizeSchemaCode(dentistCode) },
      { id: 'breadcrumb', code: normalizeSchemaCode(breadcrumbCode) },
      { id: 'faq', code: normalizeSchemaCode(faqCode) },
      { id: 'medical-condition', code: normalizeSchemaCode(medicalConditionCode) },
      { id: 'howto', code: normalizeSchemaCode(howToCode) },
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
  } catch (error) {
    console.error('Failed to render structured data:', error);
    return null;
  }
}
