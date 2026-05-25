export const SITE_URL = 'https://www.nusmiledentalca.com';

export function getBlogPostCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}
