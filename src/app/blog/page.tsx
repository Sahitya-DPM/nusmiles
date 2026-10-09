'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import { getPublishedBlogPosts, getAllBlogPosts } from '../../lib/blogService';
import { getCategoriesFromPosts } from '../../lib/blogCategories';
import { BlogPost } from '../../types/blog';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // Initially show 9 blogs

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const publishedPosts = await getPublishedBlogPosts();
        setBlogPosts(publishedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        console.error('Error details:', {
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : 'No stack trace'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const loadMoreBlogs = () => {
    setVisibleCount(prevCount => prevCount + 3); // Load 3 more blogs
  };

  const visibleBlogPosts = blogPosts.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < blogPosts.length;
  const categories = getCategoriesFromPosts(blogPosts);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Blog
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Stay updated with the latest dental health tips, treatments, and insights
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {blogPosts.length === 0 ? (
            <div className="text-center py-10 md:py-20">
              <h2 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                No published blog posts available
              </h2>
              <p className="text-gray-600 mb-4 text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Check back soon for new articles!
              </p>
              <p className="text-[16px] text-gray-500" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Note: Only blog posts with "published" status are shown here.
                Check the browser console to see all blog posts in the database.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleBlogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.imageUrl || '/next.svg'}
                        alt={post.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          console.log('Image failed to load:', post.imageUrl);
                          // Fallback to a simple div with background color
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.style.backgroundColor = '#f3f4f6';
                          target.parentElement!.innerHTML = `
                          <div class="flex items-center justify-center h-full text-gray-500 text-sm">
                            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        `;
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-[16px] text-gray-500 mb-3" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        <span>{formatDate(post.publishDate)}</span>
                        {post.author && (
                          <>
                            <span className="mx-2">â€¢</span>
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3 line-clamp-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        {post.excerpt || post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-[16px] rounded-full"
                            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors text-[15px] md:text-base"
                        style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                      >
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Read More Button */}
              {hasMoreBlogs && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={loadMoreBlogs}
                    className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    Read More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Stay Updated with Our Blog
          </h2>
          <p className="text-[16px] md:text-[16px] text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Get the latest dental health tips and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-primary/90 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Appointment
            </Link>
            <a href="tel:+12099551800" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-primary hover:text-white transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 