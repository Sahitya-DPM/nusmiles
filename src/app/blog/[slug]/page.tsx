'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import { getBlogPostBySlug } from '../../../lib/blogService';
import { BlogPost } from '../../../types/blog';
import { parseMarkdown } from '../../../utils/markdownParser';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function BlogPostContent({ slug }: { slug: string }) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const post = await getBlogPostBySlug(slug);
        setBlogPost(post);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

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
          <div className="text-xl">Loading blog post...</div>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
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
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            {blogPost.title}
          </h1>
          <div className="flex items-center justify-center text-white/90 space-x-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            <span>{formatDate(blogPost.publishDate)}</span>
            {blogPost.author && (
              <>
                <span>•</span>
                <span>By {blogPost.author}</span>
              </>
            )}
          </div>
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
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                {blogPost.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={blogPost.imageUrl || '/next.svg'}
              alt={blogPost.title}
              fill
              className="object-cover"
              onError={(e) => {
                console.log('Image failed to load:', blogPost.imageUrl);
                // Fallback to a simple div with background color
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.style.backgroundColor = '#f3f4f6';
                target.parentElement!.innerHTML = `
                  <div class="flex items-center justify-center h-full text-gray-500">
                    <div class="text-center">
                      <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p class="text-sm">Blog Image</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              {blogPost.description}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mt-8" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            <div 
              dangerouslySetInnerHTML={{ __html: parseMarkdown(blogPost.content) }}
              className="blog-content"
            />
          </div>

          {/* Author Info */}
          {blogPost.author && (
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                About the Author
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                {blogPost.author}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Contact us today to discuss your dental health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
} 