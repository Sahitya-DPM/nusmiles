'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { getAllBlogPosts, updateBlogPost } from '../../../lib/blogService';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useRouter } from 'next/navigation';

export default function CleanupPostsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [cleaning, setCleaning] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const cleanupPosts = async () => {
    setCleaning(true);
    setResults([]);
    setCompleted(false);

    const logs: string[] = [];
    
    try {
      logs.push('Fetching all blog posts...');
      setResults([...logs]);
      
      const posts = await getAllBlogPosts();
      logs.push(`Found ${posts.length} blog posts`);
      setResults([...logs]);
      
      let updatedCount = 0;
      let skippedCount = 0;
      
      // Pattern to match the specific p tag
      const pattern = /<p class="text-\[16px\] md:text-\[16px\] text-white\/90 max-w-3xl mx-auto" style="font-family: Hind, Arial, Helvetica, sans-serif;">/g;
      
      for (const post of posts) {
        const content = post.content || '';
        
        if (pattern.test(content)) {
          logs.push(`\nCleaning post: ${post.id} - "${post.title}"`);
          setResults([...logs]);
          
          // Remove the pattern and replace with simple <p>
          const cleanedContent = content.replace(pattern, '<p>');
          
          // Update the document
          await updateBlogPost(post.id, {
            content: cleanedContent
          });
          
          logs.push(`✓ Updated post: ${post.id}`);
          setResults([...logs]);
          updatedCount++;
        } else {
          logs.push(`- Skipped (no match): ${post.id} - "${post.title}"`);
          setResults([...logs]);
          skippedCount++;
        }
      }
      
      logs.push('\n========================================');
      logs.push('Cleanup completed!');
      logs.push(`Total posts: ${posts.length}`);
      logs.push(`Updated: ${updatedCount}`);
      logs.push(`Skipped: ${skippedCount}`);
      logs.push('========================================');
      setResults([...logs]);
      setCompleted(true);
      
    } catch (error: any) {
      logs.push(`\nError: ${error.message}`);
      setResults([...logs]);
    } finally {
      setCleaning(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Cleanup Blog Posts
              </h1>
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Back to Dashboard
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                This tool will remove the following pattern from all blog posts:
              </p>
              <code className="block bg-gray-100 p-3 rounded text-sm text-red-600 overflow-x-auto">
                &lt;p class="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style="font-family: Hind, Arial, Helvetica, sans-serif;"&gt;
              </code>
              <p className="text-gray-700 mt-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                It will be replaced with a simple <code>&lt;p&gt;</code> tag.
              </p>
            </div>

            <button
              onClick={cleanupPosts}
              disabled={cleaning || completed}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              {cleaning ? 'Cleaning...' : completed ? 'Cleanup Completed' : 'Start Cleanup'}
            </button>

            {results.length > 0 && (
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-y-auto max-h-96">
                {results.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
