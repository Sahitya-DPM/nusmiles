import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { insuranceFaqs } from '@/lib/insuranceFaqs';

const pageUrl = `${SITE_URL}/insurance`;

export const metadata: Metadata = {
  title: 'Dentist That Take Medical in Stockton CA | Medi-Cal',
  description:
    'Looking for a dentist that take medical in Stockton CA? NuSmile Dental accepts Medi-Cal, Denti-Cal, Health Plan of San Joaquin, Blue Cross of California, and most PPO plans.',
  keywords:
    'dentist that take medical in stockton ca, medi-cal dentist stockton, denti-cal stockton, insurance accepted dentist stockton',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    title: 'Dentist That Take Medical in Stockton CA | Medi-Cal',
    description:
      'NuSmile Dental accepts Medi-Cal and major dental plans. Verify benefits and book at our Stockton office.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Dentist That Take Medical in Stockton CA | Medi-Cal',
      description:
        'NuSmile Dental is a Stockton dentist that takes Medi-Cal / medical and major dental insurance plans.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: insuranceFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
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
          name: 'Insurance & Medi-Cal',
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
