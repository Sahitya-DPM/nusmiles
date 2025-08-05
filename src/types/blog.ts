export interface BlogPost {
  id?: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  urlSlug: string;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  tags?: string[];
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogFormData {
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  tags: string[];
  status: 'draft' | 'published';
} 