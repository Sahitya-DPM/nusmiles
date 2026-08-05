import { SITE_URL } from './site';

export interface DentalImplantCostPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  costSectionHeading: string;
  faqLocation: string;
  imageIndex: number;
}

export const dentalImplantCostPages: DentalImplantCostPageData[] = [
  {
    slug: 'cost-of-dental-implant-in-lodi-california',
    metaTitle: 'Cost of Dental Implants in Lodi CA',
    metaDescription:
      'Learn what affects the cost of dental implants in Lodi, CA, including implant type, treatment needs, restoration, and payment options.',
    heading: 'Cost of Dental Implant in Lodi , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Lodi , California?',
    faqLocation: 'Lodi , California',
    imageIndex: 1,
  },
  {
    slug: 'cost-of-dental-implant-in-manteca-california',
    metaTitle: 'Dental Implant Cost in Manteca CA Explained',
    metaDescription:
      'Understand dental implant costs in Manteca, CA, and how treatment complexity, materials, and preparatory procedures influence expenses.',
    heading: 'Cost of Dental Implant in Manteca, California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Manteca, California?',
    faqLocation: 'Manteca, California',
    imageIndex: 2,
  },
  {
    slug: 'cost-of-dental-implant-in-stockton-california',
    metaTitle: 'What Do Dental Implants Cost in Stockton CA',
    metaDescription:
      'Explore the cost of dental implants in Stockton, CA, including key pricing factors, insurance considerations, and financing options.',
    heading: 'Cost of Dental Implant in Stockton , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Stockton , California?',
    faqLocation: 'Stockton , California',
    imageIndex: 3,
  },
  {
    slug: 'cost-of-dental-implant-in-linden-california',
    metaTitle: 'Understanding Dental Implant Cost in Linden CA',
    metaDescription:
      'Learn how the number of implants, restoration type, and individual treatment needs can affect dental implant costs in Linden, CA.',
    heading: 'Cost of Dental Implant in Linden , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Linden , California?',
    faqLocation: 'Linden , California',
    imageIndex: 4,
  },
  {
    slug: 'cost-of-dental-implant-in-morada-california',
    metaTitle: 'Dental Implant Pricing Guide for Morada CA',
    metaDescription:
      'Review the cost of dental implants in Morada, CA, and learn what may be included in your personalized tooth replacement plan.',
    heading: 'Cost of Dental Implant in Morada , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Morada , California?',
    faqLocation: 'Morada , California',
    imageIndex: 5,
  },
  {
    slug: 'cost-of-dental-implant-in-waterloo-california',
    metaTitle: 'What Affects Dental Implant Cost in Waterloo CA',
    metaDescription:
      'Find out what affects dental implant costs in Waterloo, CA, including examinations, implant placement, additional care, and restorations.',
    heading: 'Cost of Dental Implant in Waterloo , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Waterloo , California?',
    faqLocation: 'Waterloo , California',
    imageIndex: 6,
  },
  {
    slug: 'cost-of-dental-implant-in-san-joaquin-california',
    metaTitle: 'Cost of Dental Implant Care in San Joaquin CA',
    metaDescription:
      'Explore dental implant costs in San Joaquin, CA, along with treatment factors, insurance coverage, and available payment solutions.',
    heading: 'Cost of Dental Implant in San Joaquin, California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in San Joaquin, California?',
    faqLocation: 'San Joaquin, California',
    imageIndex: 7,
  },
  {
    slug: 'cost-of-dental-implant-in-lincoln-village-california',
    metaTitle: 'Dental Implant Cost in Lincoln Village CA',
    metaDescription:
      'Learn about dental implant costs in Lincoln Village, CA, including treatment planning, restoration choices, and financing options.',
    heading: 'Cost of Dental Implant in Lincoln Village , California',
    costSectionHeading: 'How Much Does a Dental Implant Cost in Lincoln Village , California?',
    faqLocation: 'Lincoln Village , California',
    imageIndex: 8,
  },
];

export function getDentalImplantCostPage(
  slug: string
): DentalImplantCostPageData | undefined {
  return dentalImplantCostPages.find((page) => page.slug === slug);
}

export function getDentalImplantCostPageUrl(slug: string): string {
  return `${SITE_URL}/dental-implant-services/${slug}`;
}
