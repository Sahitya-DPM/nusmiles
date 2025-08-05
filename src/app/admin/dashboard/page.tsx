'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../contexts/AuthContext';
import { getAllBlogPosts, deleteBlogPost, updatePlaceholderImages } from '../../../lib/blogService';
import { BlogPost } from '../../../types/blog';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function AdminDashboardPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingImages, setUpdatingImages] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const posts = await getAllBlogPosts();
      setBlogPosts(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      return;
    }

    setDeletingId(id);
    try {
      console.log('Attempting to delete blog post with ID:', id);
      await deleteBlogPost(id);
      console.log('Blog post deleted successfully, updating UI');
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      
      // Show more specific error message
      let errorMessage = 'Failed to delete blog post';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      alert(`Error: ${errorMessage}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleUpdatePlaceholderImages = async () => {
    if (!confirm('This will update all blog posts with placeholder images to use real images. Continue?')) {
      return;
    }

    setUpdatingImages(true);
    try {
      console.log('Updating placeholder images...');
      await updatePlaceholderImages();
      console.log('Placeholder images updated, refreshing posts...');
      await fetchBlogPosts(); // Refresh the posts list
      alert('Placeholder images updated successfully!');
    } catch (error) {
      console.error('Error updating placeholder images:', error);
      
      let errorMessage = 'Failed to update placeholder images';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      alert(`Error: ${errorMessage}`);
    } finally {
      setUpdatingImages(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Blog Dashboard
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Manage your blog posts
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Welcome, {user?.email}
                </span>
                <button
                  onClick={handleUpdatePlaceholderImages}
                  disabled={updatingImages}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  {updatingImages ? 'Updating...' : 'Fix Images'}
                </button>
                <Link
                  href="/admin/new-post"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  New Post
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                No blog posts yet
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Create your first blog post to get started.
              </p>
              <Link
                href="/admin/new-post"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  All Blog Posts ({blogPosts.length})
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        Post
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={48}
                                height={48}
                                className="h-12 w-12 rounded-lg object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                                {post.title}
                              </div>
                              <div className="text-sm text-gray-500" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                                {post.description.substring(0, 60)}...
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            post.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`} style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                          {formatDate(post.publishDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="text-primary hover:text-primary/80 transition-colors"
                              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                            >
                              View
                            </Link>
                            <Link
                              href={`/admin/edit-post/${post.id}`}
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(post.id!)}
                              disabled={deletingId === post.id}
                              className="text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
                              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                            >
                              {deletingId === post.id ? 'Deleting...' : 'Delete'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
} 