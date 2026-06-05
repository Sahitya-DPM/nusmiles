import type { Metadata } from 'next';
import { getBlogPostBySlug } from '../../../lib/blogService';
import { getBlogPostCanonicalUrl } from '../../../lib/site';
import BlogPostContent from './BlogPostContent';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalUrl = getBlogPostCanonicalUrl(slug);

  try {
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return {
        title: 'Blog Post Not Found | NuSmile Dental',
        alternates: {
          canonical: canonicalUrl,
        },
      };
    }

    const title = post.metaTitle || post.title;
    const description = post.metaDescription || post.description || '';
    const ogImage = post.ogImageUrl || post.imageUrl;

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: 'article',
        url: canonicalUrl,
        title,
        description,
        ...(ogImage ? { images: [{ url: ogImage }] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...(ogImage ? { images: [ogImage] } : {}),
      },
    };
  } catch {
    return {
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
