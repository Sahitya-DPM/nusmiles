'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../contexts/AuthContext';
import { getBlogPostById, updateBlogPost } from '../../../../lib/blogService';
import { BlogFormData } from '../../../../types/blog';
import ProtectedRoute from '../../../../components/ProtectedRoute';
import SimpleTextEditor from '../../../../components/SimpleTextEditor';

interface EditBlogPostContentProps {
  id: string;
}

export default function EditBlogPostContent({ id }: EditBlogPostContentProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    publishDate: '',
    urlSlug: '',
    metaTitle: '',
    metaDescription: '',
    author: '',
    tags: [],
    status: 'draft'
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log('Fetching blog post with ID:', id);
        const blogPost = await getBlogPostById(id);
        
        if (blogPost) {
          console.log('Blog post found:', blogPost);
          setFormData({
            title: blogPost.title || '',
            description: blogPost.description || '',
            content: blogPost.content || '',
            imageUrl: blogPost.imageUrl || '',
            publishDate: blogPost.publishDate || new Date().toISOString().split('T')[0],
            urlSlug: blogPost.urlSlug || '',
            metaTitle: blogPost.metaTitle || '',
            metaDescription: blogPost.metaDescription || '',
            author: blogPost.author || '',
            tags: blogPost.tags || [],
            status: blogPost.status || 'draft'
          });
        } else {
          console.error('Blog post not found');
          alert('Blog post not found');
          router.push('/admin/dashboard');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        alert('Error fetching blog post');
        router.push('/admin/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    setSaving(true);
    
    try {
      console.log('Updating blog post with data:', formData);
      console.log('Image file:', imageFile);
      
      await updateBlogPost(id, formData, imageFile || undefined);
      
      console.log('Blog post updated successfully');
      alert('Blog post updated successfully!');
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error updating blog post:', error);
      
      // Show more specific error message
      let errorMessage = 'Failed to update blog post';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      alert(`Error: ${errorMessage}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-xl">Loading blog post...</div>
          </div>
        </div>
      </ProtectedRoute>
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
                  Edit Blog Post
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Update your blog post content and settings
                </p>
              </div>
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Blog Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
              <p className="mt-1 text-sm text-gray-500">
                Enter a direct URL to an image (e.g., from Unsplash, your website, etc.)
              </p>
              {formData.imageUrl && (
                <div className="mt-2">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-lg border"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="h-32 w-32 bg-gray-200 rounded-lg border flex items-center justify-center text-gray-500 text-sm">Image not found</div>';
                    }}
                  />
                </div>
              )}
            </div>

            {/* File Upload (Optional) */}
            <div>
              <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700 mb-2">
                Upload New Image File (Optional)
              </label>
              <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
              <p className="mt-1 text-sm text-gray-500">
                Or upload a new image file (will be converted to data URL)
              </p>
              {imagePreview && imageFile && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Content *
              </label>
              <SimpleTextEditor
                value={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                placeholder="Write your blog content here. You can use HTML tags for formatting."
              />
            </div>

            {/* Publish Date */}
            <div>
              <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                Publish Date *
              </label>
              <input
                type="date"
                id="publishDate"
                name="publishDate"
                required
                value={formData.publishDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* URL Slug */}
            <div>
              <label htmlFor="urlSlug" className="block text-sm font-medium text-gray-700 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                id="urlSlug"
                name="urlSlug"
                required
                value={formData.urlSlug}
                onChange={handleInputChange}
                placeholder="my-blog-post-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
              <p className="mt-1 text-sm text-gray-500">
                URL-friendly version of the title (e.g., "my-blog-post-title")
              </p>
            </div>

            {/* Meta Title */}
            <div>
              <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                id="metaTitle"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Meta Description */}
            <div>
              <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                id="metaDescription"
                name="metaDescription"
                rows={3}
                value={formData.metaDescription}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Author */}
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags.join(', ')}
                onChange={(e) => {
                  const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
                  setFormData(prev => ({ ...prev, tags }));
                }}
                placeholder="tag1, tag2, tag3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              />
              <p className="mt-1 text-sm text-gray-500">
                Comma-separated tags
              </p>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="status"
                name="status"
                required
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/admin/dashboard')}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
} 