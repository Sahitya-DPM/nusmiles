'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../contexts/AuthContext';
import { getBlogPostById, updateBlogPost } from '../../../../lib/blogService';
import { BlogFormData, BlogPost } from '../../../../types/blog';
import ProtectedRoute from '../../../../components/ProtectedRoute';
import WordPressEditor from '../../../../components/WordPressEditor';
import { uploadImageToCloudinary, validateImageFile } from '../../../../lib/cloudinaryService';

interface EditBlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [postId, setPostId] = useState<string>('');
  const postIdRef = useRef<string>('');
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    imageUrl: '',
    tags: [],
    status: 'draft',
    publishDate: new Date().toISOString().split('T')[0],
    slug: '',
    primaryKeyword: '',
    metaTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    ogImageUrl: '',
    jsonLdCode: '',
    breadcrumbCode: '',
    faqCode: '',
    medicalConditionCode: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;
        setPostId(id);
        postIdRef.current = id;
        
        const post = await getBlogPostById(id);
        if (post) {
          setFormData({
            title: post.title || '',
            content: post.content || '',
            imageUrl: post.imageUrl || '',
            tags: post.tags || [],
            status: post.status || 'draft',
            publishDate: post.publishDate ? new Date(post.publishDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            slug: post.slug || '',
            primaryKeyword: post.primaryKeyword || '',
            metaTitle: post.metaTitle || '',
            metaDescription: post.metaDescription || '',
            canonicalUrl: post.canonicalUrl || '',
            ogImageUrl: post.ogImageUrl || '',
            jsonLdCode: post.jsonLdCode || '',
            breadcrumbCode: post.breadcrumbCode || '',
            faqCode: post.faqCode || '',
            medicalConditionCode: post.medicalConditionCode || ''
          });
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        alert('Failed to load blog post. Please try again.');
        router.push('/admin/dashboard');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      // Upload to Cloudinary
      const imageUrl = await uploadImageToCloudinary(file);
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      // Update form data with Cloudinary URL
      setFormData(prev => ({ ...prev, imageUrl }));
      
      alert('Image uploaded successfully!');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const idToUpdate = postIdRef.current || postId;
    if (!idToUpdate) {
      alert('Missing post id. Please go back to dashboard and open the post again.');
      return;
    }
    
    // Validate mandatory fields
    if (!formData.title.trim()) {
      alert('Please enter a post title');
      return;
    }
    if (!formData.content.trim()) {
      alert('Please enter blog content');
      return;
    }
    if (!formData.publishDate) {
      alert('Please select a publish date');
      return;
    }
    if (!formData.primaryKeyword.trim()) {
      alert('Please enter a primary keyword');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a slug/URL');
      return;
    }
    if (!formData.metaTitle.trim()) {
      alert('Please enter a meta title');
      return;
    }
    if (!formData.metaDescription.trim()) {
      alert('Please enter a meta description');
      return;
    }
    if (!formData.imageUrl) {
      alert('Please upload an image');
      return;
    }

    setSaving(true);
    try {
      console.log('Updating blog post with data:', formData);
      await updateBlogPost(idToUpdate, formData);
      console.log('Blog post updated successfully');
      alert('Blog post updated successfully!');
      router.push('/admin/dashboard');
    } catch (error: any) {
      console.error('Error updating blog post:', error);
      const errorMessage = error?.message || 'Failed to update blog post. Please try again.';
      alert(`Error: ${errorMessage}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Edit Blog Post
              </h1>
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Back to Dashboard
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Post Title - Mandatory */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Upload Image - Mandatory */}
              <div>
                <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image * (Stored in Cloudinary)
                </label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  {uploading && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                      <p className="text-sm text-gray-600 mt-1">Uploading... {uploadProgress}%</p>
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-500">
                    Upload new image to replace current one, or keep existing. Supported: JPG, PNG, WebP, GIF (Max 10MB)
                  </p>
                  
                  {formData.imageUrl && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm font-medium text-green-800 mb-2">✓ Current Image</p>
                      <img 
                        src={formData.imageUrl} 
                        alt="Preview" 
                        className="max-w-full h-auto max-h-96 object-contain rounded-md border border-gray-300 mb-2" 
                      />
                      <p className="text-xs text-gray-600 break-all">
                        URL: {formData.imageUrl}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Publish Date - Mandatory */}
              <div>
                <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date *
                </label>
                <input
                  type="date"
                  id="publishDate"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Primary Keyword - Mandatory */}
              <div>
                <label htmlFor="primaryKeyword" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Keyword *
                </label>
                <input
                  type="text"
                  id="primaryKeyword"
                  name="primaryKeyword"
                  value={formData.primaryKeyword}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., dental implants, teeth whitening"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Slug / URL - Mandatory */}
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  Slug / URL *
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., dental-implants-guide"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
                <p className="mt-1 text-sm text-gray-500">URL-friendly version of the title (lowercase, hyphens instead of spaces)</p>
              </div>

              {/* Meta Title - Mandatory */}
              <div>
                <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title *
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  required
                  maxLength={60}
                  placeholder="SEO title (max 60 characters)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
                <p className="mt-1 text-sm text-gray-500">{formData.metaTitle.length}/60 characters</p>
              </div>

              {/* Meta Description - Mandatory */}
              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description *
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  maxLength={160}
                  placeholder="SEO description (max 160 characters)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
                <p className="mt-1 text-sm text-gray-500">{formData.metaDescription.length}/160 characters</p>
              </div>

              {/* Canonical URL - Optional */}
              <div>
                <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  id="canonicalUrl"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/canonical-url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* OG Image URL - Optional */}
              <div>
                <label htmlFor="ogImageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  OG Image URL
                </label>
                <input
                  type="url"
                  id="ogImageUrl"
                  name="ogImageUrl"
                  value={formData.ogImageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/og-image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* JSON-LD Code - Optional */}
              <div>
                <label htmlFor="jsonLdCode" className="block text-sm font-medium text-gray-700 mb-2">
                  JSON-LD Code
                </label>
                <textarea
                  id="jsonLdCode"
                  name="jsonLdCode"
                  value={formData.jsonLdCode}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder='{"@context": "https://schema.org", "@type": "Article", ...}'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Breadcrumb Code - Optional */}
              <div>
                <label htmlFor="breadcrumbCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Breadcrumb Code
                </label>
                <textarea
                  id="breadcrumbCode"
                  name="breadcrumbCode"
                  value={formData.breadcrumbCode}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder='{"@context": "https://schema.org", "@type": "BreadcrumbList", ...}'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* FAQ Code - Optional */}
              <div>
                <label htmlFor="faqCode" className="block text-sm font-medium text-gray-700 mb-2">
                  FAQ Code
                </label>
                <textarea
                  id="faqCode"
                  name="faqCode"
                  value={formData.faqCode}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder='{"@context": "https://schema.org", "@type": "FAQPage", ...}'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* MedicalCondition Code - Optional */}
              <div>
                <label htmlFor="medicalConditionCode" className="block text-sm font-medium text-gray-700 mb-2">
                  MedicalCondition Code
                </label>
                <textarea
                  id="medicalConditionCode"
                  name="medicalConditionCode"
                  value={formData.medicalConditionCode}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder='{"@context": "https://schema.org", "@type": "MedicalCondition", ...}'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="sticky top-0 z-50 bg-white pt-2 pb-2 -mx-6 px-6">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Content *
                  </label>
                </div>
                <div className="-mx-6 px-6">
                  <WordPressEditor
                    value={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    placeholder="Write your blog content here..."
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4 border-t">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  {saving ? 'Updating...' : 'Update Blog Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
