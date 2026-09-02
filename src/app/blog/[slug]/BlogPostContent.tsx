'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import { BlogPost } from '../../../types/blog';
import { expandRawCodeBlocks } from '../../../lib/rawCode';

interface BlogPostContentProps {
  slug: string;
  blogPost: BlogPost | null;
}

export default function BlogPostContent({ blogPost }: BlogPostContentProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const renderedContent = blogPost?.content ? expandRawCodeBlocks(blogPost.content) : '';

  React.useEffect(() => {
    const container = contentRef.current;
    if (!container) {
      return;
    }

    const scripts = container.querySelectorAll<HTMLScriptElement>(
      '.raw-code-block[data-language="javascript"] script, .raw-code-block[data-language="html"] script:not([type]), .raw-code-block[data-language="html"] script[type="text/javascript"]'
    );

    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [renderedContent]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-4">The blog post you&apos;re looking for doesn&apos;t exist or is not published.</p>
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
        <div className="absolute inset-0">
          {blogPost.imageUrl && (
            <Image
              src={blogPost.imageUrl}
              alt={blogPost.title}
              fill
              className="object-cover"
              sizes="100vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
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
          <h1
            className="text-[27px] md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            {blogPost.title}
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            <p className="text-sm">Published on {formatDate(blogPost.publishDate)}</p>
          </div>

          {renderedContent ? (
            <div
              ref={contentRef}
              className="blog-content"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#374151',
              }}
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          ) : (
            <div
              className="text-gray-500 italic p-8 text-center"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
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
            .blog-content h4,
            .blog-content h5,
            .blog-content h6 {
              font-weight: bold;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
              color: #111827;
            }
            .blog-content ul,
            .blog-content ol {
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
            .blog-content .raw-code-block {
              display: contents;
            }
            .blog-content .blog-code-block {
              display: block;
              background-color: #1f2937;
              color: #f9fafb;
              padding: 1rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              margin: 1.5rem 0;
              white-space: pre-wrap;
            }
            .blog-content strong {
              font-weight: bold;
            }
            .blog-content em {
              font-style: italic;
            }
            .blog-content .tableWrapper {
              overflow-x: auto;
              margin: 1.5rem 0;
            }
            .blog-content table,
            .blog-content .blog-table {
              border-collapse: collapse;
              table-layout: fixed;
              width: 100%;
              margin: 0;
            }
            .blog-content td,
            .blog-content th,
            .blog-content .blog-table-cell,
            .blog-content .blog-table-header {
              min-width: 1em;
              border: 1px solid #d1d5db;
              padding: 8px 12px;
              vertical-align: top;
              box-sizing: border-box;
            }
            .blog-content th,
            .blog-content .blog-table-header {
              font-weight: bold;
              text-align: left;
              background-color: #f3f4f6;
              color: #111827;
            }
            .blog-content td p,
            .blog-content th p {
              margin: 0;
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
