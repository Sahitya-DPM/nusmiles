export const SITE_URL = 'https://www.nusmiledentalca.com';

export const BUSINESS_NAME = 'NuSmile Dental';
export const BUSINESS_ALTERNATE_NAMES = [
  'Nu Smile Dental',
  'NuSmile Dentist',
  'NuSmile Dentistry',
  'NuSmile Family Dentistry',
  'Nusmiles Dental',
  'NuSmiles Dental',
];

export const STREET_ADDRESS = '1801 E March Ln A165';
export const ADDRESS_LOCALITY = 'Stockton';
export const ADDRESS_REGION = 'CA';
export const POSTAL_CODE = '95210';
export const ADDRESS_COUNTRY = 'US';
export const ADDRESS_DISPLAY = '1801 E March Ln A165, Stockton, CA 95210, United States';
export const GEO_LATITUDE = 38.0128;
export const GEO_LONGITUDE = -121.2739;

export const PHONE_DISPLAY = '(209) 955-1800';
export const PHONE_TEL = 'tel:+12099551800';
export const PHONE_E164 = '+12099551800';

export const TESTIMONIAL_VIDEO_URL = '/NuSmileTestimonial.mp4';
export const LOGO_URL =
  'https://cdcssl.ibsrv.net/ibimg/smb/218x100_80/webmgr/0t/1/w/64b6d9599db5c_nusmilelogo.png.webp?ab8c818672eef3a981e2d0a2dbd11bd4';
export const SAME_AS = [
  'https://www.facebook.com/nusmiledental',
  'https://www.instagram.com/nusmiledentalca',
];

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
