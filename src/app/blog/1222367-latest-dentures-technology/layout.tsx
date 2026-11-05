import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import {
  DENTURES_TECHNOLOGY_PATH,
  DENTURES_TECHNOLOGY_PUBLISH_DATE,
  denturesTechnologyFaqs,
} from '@/lib/denturesTechnologyFaqs';

const pageUrl = `${SITE_URL}${DENTURES_TECHNOLOGY_PATH}`;

export const metadata: Metadata = {
  title: 'Latest Dentures Technology in 2026 | New False Teeth',
  description:
    'Updated September 2026: latest dentures technology, new false teeth technology, and the newest dentures technology — digital scans, 3D-printed dentures, and implant-supported options in Stockton.',
  keywords:
    'latest dentures technology, new false teeth technology, newest dentures technology, digital dentures, implant dentures Stockton',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'Latest Dentures Technology in 2026 | New False Teeth',
    description:
      'A dated 2026 guide to the latest dentures technology, new false teeth, and the newest digital and implant-supported denture options at NuSmile Dental.',
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
      '@type': 'BlogPosting',
      headline: 'Latest Dentures Technology in 2026: New False Teeth and Digital Options',
      datePublished: DENTURES_TECHNOLOGY_PUBLISH_DATE,
      dateModified: DENTURES_TECHNOLOGY_PUBLISH_DATE,
      author: {
        '@type': 'Person',
        name: 'Dr. Rujul G. Parikh, DDS',
      },
      publisher: {
        '@type': 'Dentist',
        name: 'NuSmile Dental',
        url: `${SITE_URL}/`,
      },
      mainEntityOfPage: pageUrl,
      image: `${SITE_URL}/Dental%20Implants%20s.jpeg`,
      description:
        'Current 2026 guide to the latest dentures technology, new false teeth technology, and the newest dentures technology in Stockton, CA.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: denturesTechnologyFaqs.map((faq) => ({
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
          name: 'Blog',
          item: `${SITE_URL}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Latest Dentures Technology',
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function LatestDenturesTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
