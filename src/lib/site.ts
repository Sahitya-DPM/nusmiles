export const SITE_URL = 'https://www.nusmiledentalca.com';

export const PHONE_DISPLAY = '(209) 955-1800';
export const PHONE_TEL = 'tel:+12099551800';

export const TESTIMONIAL_VIDEO_URL = '/NuSmileTestimonial.mp4';

export function getBlogPathSlug(slug: string): string {
  return slug
    .trim()
    .replace(/^\/+/, '')
    .replace(/^blog\//i, '')
    .replace(/^\/+/, '');
}

function encodePathSegments(path: string): string {
  return path
    .split('/')
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
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

export function getCanonicalBlogSlug(slug: string): string {
  return sanitizeSlug(getBlogPathSlug(slug));
}

export function getBlogPostCanonicalUrl(slug: string): string {
  const pathSlug = getCanonicalBlogSlug(slug) || getBlogPathSlug(slug);
  return `${SITE_URL}/blog/${encodePathSegments(pathSlug)}`;
}

export function getBlogSitemapEntry(slug: string): string {
  return getBlogPostCanonicalUrl(slug);
}

export function getBlogCategoryUrl(slug: string): string {
  const pathSlug = sanitizeSlug(getBlogPathSlug(slug)) || getBlogPathSlug(slug);
  return `${SITE_URL}/blog/category/${encodePathSegments(pathSlug)}`;
}

export function isCanonicalIndexablePath(path: string): boolean {
  if (path === '/') {
    return true;
  }

  if (!path.startsWith('/')) {
    return false;
  }

  if (
    path.startsWith('/admin') ||
    path.startsWith('/api') ||
    path.includes('//') ||
    path.endsWith('/')
  ) {
    return false;
  }

  return /^\/[a-z0-9]+(?:[a-z0-9\-/]*[a-z0-9])?$/.test(path);
}
