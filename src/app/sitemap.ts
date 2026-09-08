import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '../lib/blogService';
import { getCategoriesFromPosts } from '../lib/blogCategories';
import { dentalImplantCostPages, getDentalImplantCostPageUrl } from '../lib/dentalImplantCostPages';
import {
  getBlogCategoryUrl,
  getBlogSitemapEntry,
  SITE_URL,
} from '../lib/site';

export const revalidate = 3600;

const FALLBACK_BLOG_SLUGS = [
  'dental-implants-brass-woodwind-musicians',
  'does-aging-affect-implant-or-supporting-bone',
  'dental-implant-timing-explained-early-vs-late-placement-pros-and-cons',
  'dental-implant-procedure-explained-safe-painless-and-easier-than-ever',
  'from-soft-diet-to-full-diet-the-power-of-dental-implants',
  'struggling-with-bad-breath-from-missing-teeth-try-a-dental-implant',
  'can-patients-with-gum-disease-qualify-for-dental-implants',
  'do-dental-implant-stain-or-change-color-what-paients-should-know',
  'tmj-discomfort-from-tooth-loss-implants-may-help',
  'gum-disease-why-it-must-be-fully-treated-before-dental-implant',
  'sinus-lifts-and-bone-grafts-why-they-are-essential-for-successful-dental-implants',
  'can-dental-implants-prevent-food-from-getting-stuck-betwwen-teeth',
  'dos-donts-comfortable-dental-implant-healing',
  'premature-aging-from-tooth-loss-full-mouth-implants-protect-facial-structure',
  'foods-to-avoid-after-dental-implant-surgery-why-dairy-is-on-the-list',
  'dental-implant-insurance-whats-covered-whats-not',
  'how-do-i-choose-between-dental-bridges-and-permanent-tooth-replacement',
  'is-getting-dental-implants-the-cheapest-way-to-replace-missing-teeth-with-dr-rujul-g-parikh-in-stockton',
  'painless-implant-surgery-what-to-expect-before-during-and-after-the-procedure',
  'the-secret-to-a-perfect-smile-according-to-dr-danny-lawen',
  'straight-teeth-tips',
  'how-implants-make-dentures-more-comfortable',
  'bonding-vs-veneers-key-differences-explained',
  'how-dental-bridges-can-improve-your-chewing-and-speech',
  'biting-into-an-apple-again-a-real-dental-implant-success-story',
  'missing-teeth-and-your-health-why-dental-implants-are-more-than-a-cosmetic-fix',
  'how-to-replace-a-missing-tooth-without-affecting-the-rest',
  'Replacing One Tooth? Why a Single Tooth Implant Might Be Ideal',
  'do-full-denture-implants-feel-like-real-teeth',
  'Can You Eat Normally With a Front Tooth Implant?',
  'can-get-complete-dental-implants-if-i-have-bone-loss',
  'permanent-teeth-in-a-day',
  'what-are-the-different-materials-used-for-dental-implants',
  'Can Dental Implants Be Done on the Same Day as Tooth Extraction?',
  'how-painful-is-getting-a-dental-implant',
  'can-i-get-a-dental-implant-if-i-have-sensitive-teeth',
  'what-are-the-benefits-of-a-single-tooth-implant',
  'how-long-does-it-take-for-dental-implants-to-fully-integrate-into-the-jawbone-in-stockton-ca',
  'how-dr-shivli-arora-ensures-a-pain-free-dental-implant-experience-in-stockton-ca',
  'full-mouth-implants-vs-traditional-dentures-unlock-the-secret-to-a-radiant-long-lasting-smile',
  'Happy Holidays! Healthy Holidays!',
];

type FirestoreTimestampLike = {
  toDate?: () => Date;
  seconds?: number;
};

const STATIC_PATHS: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1 },
  { path: '/about-us', priority: 0.8 },
  { path: '/dental-staff', priority: 0.8 },
  { path: '/office', priority: 0.8 },
  { path: '/smile-gallery', priority: 0.8 },
  { path: '/testimonials', priority: 0.8 },
  { path: '/dental-services', priority: 0.8 },
  { path: '/general-dentistry', priority: 0.8 },
  { path: '/dental-implants', priority: 0.8 },
  { path: '/services/dental-implants-all-on-4-faqs-stockton', priority: 0.8 },
  { path: '/all-on-4-implant-dentures', priority: 0.8 },
  { path: '/invisalign', priority: 0.8 },
  { path: '/platelet-rich-fibrin-therapy-prf', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
  { path: '/resources', priority: 0.8 },
  { path: '/patient-education', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/appointment', priority: 0.8 },
  { path: '/privacy-policy', priority: 0.64 },
  { path: '/disclaimer', priority: 0.64 },
  { path: '/patient-education/cosmetic-general-dentistry', priority: 0.64 },
  { path: '/patient-education/educational-videos', priority: 0.64 },
  { path: '/patient-education/about-pediatric-dentistry', priority: 0.64 },
  { path: '/patient-education/aging-and-oral-health', priority: 0.64 },
  { path: '/patient-education/air-abrasion', priority: 0.64 },
  { path: '/patient-education/anesthesia-wand', priority: 0.64 },
  { path: '/patient-education/antibiotic-premedication', priority: 0.64 },
  { path: '/patient-education/bad-breath', priority: 0.64 },
  { path: '/patient-education/blood-thinners-and-oral-surgery', priority: 0.64 },
  { path: '/patient-education/bonding', priority: 0.64 },
  { path: '/patient-education/bone-grafting', priority: 0.64 },
  { path: '/patient-education/bridges', priority: 0.64 },
  { path: '/patient-education/cleft-lip-and-palate', priority: 0.64 },
  { path: '/patient-education/cone-beam-ct-imaging', priority: 0.64 },
  { path: '/patient-education/dental-cleanings', priority: 0.64 },
  { path: '/patient-education/dental-crowns', priority: 0.64 },
  { path: '/patient-education/dental-fillings', priority: 0.64 },
  { path: '/patient-education/dental-implants', priority: 0.64 },
  { path: '/patient-education/digital-dental-impressions', priority: 0.64 },
  { path: '/patient-education/digital-x-rays', priority: 0.64 },
  { path: '/patient-education/early-orthodontic-treatment', priority: 0.64 },
  { path: '/patient-education/emergency-care', priority: 0.64 },
  { path: '/patient-education/endodontics', priority: 0.64 },
  { path: '/patient-education/extractions', priority: 0.64 },
  { path: '/patient-education/fluoride-and-your-child', priority: 0.64 },
  { path: '/patient-education/gum-emergencies', priority: 0.64 },
  { path: '/patient-education/how-to-brush-and-floss', priority: 0.64 },
  { path: '/patient-education/how-to-prevent-cavities', priority: 0.64 },
  { path: '/patient-education/interdental-cleaning-devices', priority: 0.64 },
  { path: '/patient-education/intraoral-camera', priority: 0.64 },
  { path: '/patient-education/laser-decay-diagnostics', priority: 0.64 },
  { path: '/patient-education/laser-dentistry', priority: 0.64 },
  { path: '/patient-education/mouthwash', priority: 0.64 },
  { path: '/patient-education/nitrous-oxide-for-children', priority: 0.64 },
  { path: '/patient-education/oral-health', priority: 0.64 },
  { path: '/patient-education/oral-hygiene', priority: 0.64 },
  { path: '/patient-education/oral-hygiene-for-kids', priority: 0.64 },
  { path: '/patient-education/oral-surgery', priority: 0.64 },
  { path: '/patient-education/orthodontic-emergencies', priority: 0.64 },
  { path: '/patient-education/orthodontics', priority: 0.64 },
  { path: '/patient-education/pediatric-dentistry', priority: 0.64 },
  { path: '/patient-education/periodontal-therapy', priority: 0.64 },
  { path: '/patient-education/pregnancy-and-your-childs-developing-teeth', priority: 0.64 },
  { path: '/patient-education/root-canal-faqs', priority: 0.64 },
  { path: '/patient-education/root-canal-treatment', priority: 0.64 },
  { path: '/patient-education/same-day-crowns', priority: 0.64 },
  { path: '/patient-education/sealants', priority: 0.64 },
  { path: '/patient-education/sedation-dentistry', priority: 0.64 },
  { path: '/patient-education/sleep-apnea-in-children', priority: 0.64 },
  { path: '/patient-education/space-maintainers', priority: 0.64 },
  { path: '/patient-education/technology', priority: 0.64 },
  { path: '/patient-education/teeth-whitening', priority: 0.64 },
  { path: '/patient-education/tooth-contouring', priority: 0.64 },
  { path: '/patient-education/tooth-pain', priority: 0.64 },
  { path: '/patient-education/toothpaste', priority: 0.64 },
  { path: '/patient-education/thumb-sucking', priority: 0.64 },
  { path: '/patient-education/traumatic-dental-injuries', priority: 0.64 },
  { path: '/patient-education/veneers', priority: 0.64 },
  { path: '/patient-education/wisdom-teeth-removal', priority: 0.64 },
];

function toDate(value: unknown): Date | undefined {
  if (!value) {
    return undefined;
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  if (typeof value === 'object') {
    const timestamp = value as FirestoreTimestampLike;
    if (typeof timestamp.toDate === 'function') {
      const date = timestamp.toDate();
      return Number.isNaN(date.getTime()) ? undefined : date;
    }
    if (typeof timestamp.seconds === 'number') {
      const date = new Date(timestamp.seconds * 1000);
      return Number.isNaN(date.getTime()) ? undefined : date;
    }
  }

  const date = new Date(value as string | number);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toAbsoluteUrl(path: string): string {
  if (path === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority }) => ({
    url: toAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === '/' || path === '/blog' ? 'weekly' : 'monthly',
    priority,
  }));

  for (const page of dentalImplantCostPages) {
    entries.push({
      url: getDentalImplantCostPageUrl(page.slug),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  const seen = new Set(entries.map((entry) => entry.url));

  const addBlogUrl = (slug: string, lastModified?: Date) => {
    if (!slug?.trim()) {
      return;
    }

    const url = getBlogSitemapEntry(slug);
    if (seen.has(url)) {
      return;
    }

    seen.add(url);
    entries.push({
      url,
      lastModified: lastModified || new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  };

  try {
    const posts = await getPublishedBlogPosts();

    for (const post of posts) {
      addBlogUrl(post.slug, toDate(post.updatedAt) || toDate(post.publishDate));
    }

    for (const category of getCategoriesFromPosts(posts)) {
      const url = getBlogCategoryUrl(category.slug);
      if (seen.has(url)) {
        continue;
      }

      seen.add(url);
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  } catch (error) {
    console.error('Failed to add published blog posts to sitemap:', error);
  }

  for (const slug of FALLBACK_BLOG_SLUGS) {
    addBlogUrl(slug);
  }

  const fallbackCategoryUrl = getBlogCategoryUrl('dental-implant');
  if (!seen.has(fallbackCategoryUrl)) {
    entries.push({
      url: fallbackCategoryUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  return entries;
}
