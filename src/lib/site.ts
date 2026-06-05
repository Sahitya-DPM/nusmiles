export const SITE_URL = 'https://www.nusmiledentalca.com';

export const TESTIMONIAL_VIDEO_URL =
  'https://res.cloudinary.com/dip8eus3y/video/upload/v1780642363/nusmiles-videos/video1_ootd7a.mp4';

export function getBlogPostCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}
