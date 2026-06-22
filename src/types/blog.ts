export interface BlogPost {
  id?: string;
  title: string;
  description?: string;
  content: string;
  excerpt?: string;
  imageUrl: string;
  publishDate: string;
  slug: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  jsonLdCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
  author?: string;
  category?: string;
  tags?: string[];
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogFormData {
  title: string;
  description?: string;
  content: string;
  excerpt?: string;
  imageUrl: string;
  publishDate: string;
  slug: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  jsonLdCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
  author?: string;
  tags: string[];
  status: 'draft' | 'published';
} 