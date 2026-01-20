'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../contexts/AuthContext';
import { getBlogPostById, updateBlogPost } from '../../../../lib/blogService';
import { BlogFormData, BlogPost } from '../../../../types/blog';
import ProtectedRoute from '../../../../components/ProtectedRoute';
import WordPressEditor from '../../../../components/WordPressEditor';

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
  const [imageError, setImageError] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
    
    // Auto-generate imageUrl from filename
    if (name === 'imageUrl') {
      const filename = value.trim();
      setFormData(prev => ({ ...prev, imageUrl: filename ? `/images/${filename}` : '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageError('');
      // Keep it under Firestore 1MB base64 limit (we prefer base64 to avoid Storage/CORS)
      const maxFileSize = 1.2 * 1024 * 1024; // ~1.2MB
      if (file.size > maxFileSize) {
        setImageError('Image is too large. Please use an image under ~1MB.');
        setImageFile(null);
        // keep the existing imageUrl (don’t wipe the current image on edit)
        setImagePreview(formData.imageUrl || null);
        e.target.value = ''; // Clear the input
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target?.result as string;
        setImagePreview(base64Image);

        // Always store base64 (we already limited size) so we can bypass Storage/CORS
        setFormData(prev => ({ ...prev, imageUrl: base64Image }));
      };
      reader.readAsDataURL(file);
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
      alert('Please enter an image filename');
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

              {/* Image Filename - Mandatory */}
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Image Filename * (from /public/images/ folder)
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl.replace('/images/', '')}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., dental-implant-insurance-coverage.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Place your image in <code className="bg-gray-100 px-2 py-1 rounded">/public/images/</code> folder and enter the filename here
                </p>
                {formData.imageUrl && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                    <img 
                      src={formData.imageUrl} 
                      alt="Preview" 
                      className="max-w-full h-auto max-h-96 object-contain rounded-md border border-gray-300" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const errorMsg = document.createElement('p');
                          errorMsg.className = 'text-sm text-red-600 mt-2';
                          errorMsg.textContent = 'Image not found. Make sure the file exists in /public/images/ folder';
                          parent.appendChild(errorMsg);
                        }
                      }}
                    />
                  </div>
                )}
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
