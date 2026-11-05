import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { insuranceFaqs } from '@/lib/insuranceFaqs';

const pageUrl = `${SITE_URL}/insurance`;

export const metadata: Metadata = {
  title: 'PPO Dental Insurance in Stockton, CA | NuSmile Dental',
  description:
    'NuSmile Dental works with most PPO dental plans in Stockton, CA. Call (209) 955-1800 to check your benefits and schedule a dental appointment.',
  keywords:
    'dentist that take medical in stockton ca, medi-cal dentist stockton, denti-cal stockton, insurance accepted dentist stockton',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    title: 'PPO Dental Insurance in Stockton, CA | NuSmile Dental',
    description:
      'NuSmile Dental works with most PPO dental plans in Stockton, CA. Call (209) 955-1800 to check your benefits and schedule a dental appointment.',
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
