export const SITE_URL = 'https://www.nusmiledentalca.com';

export const PHONE_DISPLAY = '(209) 955-1800';
export const PHONE_TEL = 'tel:+12099551800';

export const TESTIMONIAL_VIDEO_URL = '/NuSmileTestimonial.mp4';

export function getBlogPostCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function sanitizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
