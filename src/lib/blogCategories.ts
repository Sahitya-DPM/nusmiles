import { BlogPost } from '../types/blog';
import { sanitizeSlug } from './site';

export type BlogCategory = {
  name: string;
  slug: string;
  count: number;
};

function getPostCategories(post: BlogPost): string[] {
  const categories = new Set<string>();

  if (post.category?.trim()) {
    categories.add(post.category.trim());
  }

  for (const tag of post.tags || []) {
    if (tag?.trim()) {
      categories.add(tag.trim());
    }
  }

  return Array.from(categories);
}

export function getCategoriesFromPosts(posts: BlogPost[]): BlogCategory[] {
  const categoryMap = new Map<string, BlogCategory>();

  for (const post of posts) {
    for (const name of getPostCategories(post)) {
      const slug = sanitizeSlug(name);
      if (!slug) {
        continue;
      }

      const existing = categoryMap.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        categoryMap.set(slug, { name, slug, count: 1 });
      }
    }
  }

  return Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function postMatchesCategory(post: BlogPost, categorySlug: string): boolean {
  const normalizedSlug = categorySlug.trim().toLowerCase();
  return getPostCategories(post).some((name) => sanitizeSlug(name) === normalizedSlug);
}

export function getCategoryNameFromPosts(posts: BlogPost[], categorySlug: string): string | null {
  for (const post of posts) {
    for (const name of getPostCategories(post)) {
      if (sanitizeSlug(name) === categorySlug) {
        return name;
      }
    }
  }

  return null;
}
