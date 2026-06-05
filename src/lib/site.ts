export const SITE_URL = 'https://www.nusmiledentalca.com';

export const TESTIMONIAL_VIDEO_URL = '/NuSmileTestimonial.mp4';

export function getBlogPostCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}
