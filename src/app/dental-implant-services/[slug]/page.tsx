import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DentalImplantCostPage from '@/components/DentalImplantCostPage';
import {
  dentalImplantCostPages,
  getDentalImplantCostPage,
  getDentalImplantCostPageUrl,
} from '@/lib/dentalImplantCostPages';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return dentalImplantCostPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getDentalImplantCostPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: getDentalImplantCostPageUrl(page.slug),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: getDentalImplantCostPageUrl(page.slug),
      type: 'website',
    },
  };
}

export default async function DentalImplantCostRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getDentalImplantCostPage(slug);

  if (!page) {
    notFound();
  }

  return <DentalImplantCostPage page={page} />;
}
