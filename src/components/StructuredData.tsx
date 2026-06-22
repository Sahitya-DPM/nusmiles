type StructuredDataProps = {
  jsonLdCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
};

export default function StructuredData({
  jsonLdCode,
  breadcrumbCode,
  faqCode,
  medicalConditionCode,
}: StructuredDataProps) {
  const blocks = [
    { id: 'json-ld', code: jsonLdCode },
    { id: 'breadcrumb', code: breadcrumbCode },
    { id: 'faq', code: faqCode },
    { id: 'medical-condition', code: medicalConditionCode },
  ].filter((block) => block.code?.trim());

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
          dangerouslySetInnerHTML={{ __html: code! }}
        />
      ))}
    </>
  );
}
