import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../../components/Header';
import { getCategoryNameFromPosts, postMatchesCategory } from '../../../../lib/blogCategories';
import { getPublishedBlogPosts } from '../../../../lib/blogService';
import { SITE_URL } from '../../../../lib/site';
import { BlogPost } from '../../../../types/blog';

type BlogCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPublishedBlogPosts();
  const categoryName = getCategoryNameFromPosts(posts, slug);

  if (!categoryName) {
    return {
      title: 'Blog Category Not Found | NuSmile Dental',
    };
  }

  const canonicalUrl = `${SITE_URL}/blog/category/${slug}`;

  return {
    title: `${categoryName} Articles | NuSmile Dental Blog`,
    description: `Read ${categoryName.toLowerCase()} articles and dental health tips from NuSmile Dental in Stockton, CA.`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const posts = await getPublishedBlogPosts();
  const categoryName = getCategoryNameFromPosts(posts, slug);
  const categoryPosts = posts.filter((post: BlogPost) => postMatchesCategory(post, slug));

  if (!categoryName) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-4">The blog category you are looking for does not exist.</p>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[27px] md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            {categoryName}
          </h1>
          <p
            className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Articles about {categoryName.toLowerCase()}
          </p>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900">{categoryName}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No published posts found in this category yet.</p>
              <Link href="/blog" className="text-primary hover:underline font-semibold">
                View all blog posts
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl || '/next.svg'}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-3">{formatDate(post.publishDate)}</p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt || post.description}</p>
                    <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
