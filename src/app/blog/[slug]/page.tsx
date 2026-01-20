'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import { getBlogPostBySlug } from '../../../lib/blogService';
import { BlogPost } from '../../../types/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [slug, setSlug] = useState<string>('');
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      try {
        console.log('Fetching blog post with slug:', slug);
        const post = await getBlogPostBySlug(slug);
        console.log('Blog post found:', post ? 'Yes' : 'No');
        if (post) {
          console.log('Post details:', {
            title: post.title,
            slug: post.slug,
            status: post.status,
            imageUrl: post.imageUrl,
            hasImage: !!post.imageUrl,
            hasContent: !!post.content,
            contentLength: post.content?.length || 0,
            contentPreview: post.content?.substring(0, 100) || 'No content'
          });
        }
        setBlogPost(post);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  // Update meta tags when blog post is loaded
  useEffect(() => {
    if (!blogPost) return;

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
    const postUrl = `${baseUrl}/blog/${blogPost.slug}`;
    const ogImage = blogPost.ogImageUrl || blogPost.imageUrl || '';

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update title
    document.title = blogPost.metaTitle || blogPost.title;

    // Meta Title
    updateMetaTag('title', blogPost.metaTitle || blogPost.title);
    
    // Meta Description
    updateMetaTag('description', blogPost.metaDescription || blogPost.description);
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (blogPost.canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', blogPost.canonicalUrl);
    }
    
    // Open Graph tags
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:url', postUrl, true);
    updateMetaTag('og:title', blogPost.metaTitle || blogPost.title, true);
    updateMetaTag('og:description', blogPost.metaDescription || blogPost.description, true);
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', postUrl, true);
    updateMetaTag('twitter:title', blogPost.metaTitle || blogPost.title, true);
    updateMetaTag('twitter:description', blogPost.metaDescription || blogPost.description, true);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true);
    }

    // JSON-LD Structured Data
    const removeScripts = (type: string) => {
      const scripts = document.querySelectorAll(`script[data-structured-data="${type}"]`);
      scripts.forEach(script => script.remove());
    };

    const addStructuredData = (type: string, code: string) => {
      if (!code) return;
      removeScripts(type);
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', type);
      script.textContent = code;
      document.head.appendChild(script);
    };

    if (blogPost.jsonLdCode) {
      addStructuredData('json-ld', blogPost.jsonLdCode);
    }
    if (blogPost.breadcrumbCode) {
      addStructuredData('breadcrumb', blogPost.breadcrumbCode);
    }
    if (blogPost.faqCode) {
      addStructuredData('faq', blogPost.faqCode);
    }
    if (blogPost.medicalConditionCode) {
      addStructuredData('medical-condition', blogPost.medicalConditionCode);
    }
  }, [blogPost]);

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
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist or is not published.</p>
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
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
          <div className="absolute inset-0">
            {blogPost.imageUrl && (
              <Image
                src={blogPost.imageUrl}
                alt={blogPost.title}
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  console.error('Image failed to load:', blogPost.imageUrl);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', blogPost.imageUrl);
                }}
              />
            )}
            {!blogPost.imageUrl && (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              {blogPost.title}
            </h1>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-10 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <p className="text-sm">
                Published on {formatDate(blogPost.publishDate)}
              </p>
            </div>

            {blogPost.content ? (
              <div 
                className="blog-content"
                style={{ 
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.75',
                  color: '#374151'
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            ) : (
              <div className="text-gray-500 italic p-8 text-center" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                No content available for this post.
              </div>
            )}
            
            <style jsx global>{`
              .blog-content {
                color: #374151;
              }
              .blog-content p {
                margin-bottom: 1.25rem;
                line-height: 1.75;
              }
              .blog-content h1 {
                font-size: 2.25rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: #111827;
              }
              .blog-content h2 {
                font-size: 1.875rem;
                font-weight: bold;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                color: #111827;
              }
              .blog-content h3 {
                font-size: 1.5rem;
                font-weight: bold;
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
                color: #111827;
              }
              .blog-content h4, .blog-content h5, .blog-content h6 {
                font-weight: bold;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                color: #111827;
              }
              .blog-content ul, .blog-content ol {
                margin-left: 1.5rem;
                margin-bottom: 1.25rem;
              }
              .blog-content ul {
                list-style-type: disc;
              }
              .blog-content ol {
                list-style-type: decimal;
              }
              .blog-content li {
                margin-bottom: 0.5rem;
              }
              .blog-content a {
                color: #2563eb;
                text-decoration: underline;
              }
              .blog-content a:hover {
                color: #1e40af;
              }
              .blog-content img {
                max-width: 100%;
                height: auto;
                margin: 1.5rem 0;
                border-radius: 0.5rem;
              }
              .blog-content blockquote {
                border-left: 4px solid #e5e7eb;
                padding-left: 1rem;
                margin: 1.5rem 0;
                font-style: italic;
                color: #6b7280;
              }
              .blog-content code {
                background-color: #f3f4f6;
                padding: 0.2rem 0.4rem;
                border-radius: 0.25rem;
                font-family: monospace;
                font-size: 0.875rem;
              }
              .blog-content pre {
                background-color: #1f2937;
                color: #f9fafb;
                padding: 1rem;
                border-radius: 0.5rem;
                overflow-x: auto;
                margin: 1.5rem 0;
              }
              .blog-content pre code {
                background-color: transparent;
                color: inherit;
                padding: 0;
              }
              .blog-content strong {
                font-weight: bold;
              }
              .blog-content em {
                font-style: italic;
              }
            `}</style>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/blog" 
                className="text-primary hover:underline font-semibold"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
