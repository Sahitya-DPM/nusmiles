import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost, BlogFormData } from '../types/blog';
import { sanitizeSlug } from './site';

const BLOG_COLLECTION = 'blog-posts';

// Helper function to check if Firebase is available
const checkFirebaseAvailability = () => {
  if (!db) {
    throw new Error('Firestore is not configured. Please set up your Firebase credentials in .env.local');
  }
};

// Test Firebase connectivity
export const testFirebaseConnection = async () => {
  try {
    checkFirebaseAvailability();

    // Test Firestore connection
    const testDoc = await addDoc(collection(db!, 'test'), {
      test: true,
      timestamp: new Date()
    });

    // Clean up test document
    await deleteDoc(testDoc);

    console.log('Firebase connection test successful');
    return true;
  } catch (error) {
    console.error('Firebase connection test failed:', error);
    throw error;
  }
};

// Test creating a simple blog post without image
export const testCreateBlogPost = async (): Promise<string> => {
  try {
    checkFirebaseAvailability();

    const testBlogPost = {
      title: 'Test Blog Post',
      description: 'This is a test blog post',
      content: 'This is the content of the test blog post.',
      imageUrl: '/images/test-image.jpg',
      publishDate: new Date().toISOString().split('T')[0],
      slug: 'test-blog-post',
      metaTitle: 'Test Blog Post',
      metaDescription: 'This is a test blog post',
      author: 'Test Author',
      tags: ['test', 'blog'],
      status: 'published' as const,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('Creating test blog post with data:', testBlogPost);
    const docRef = await addDoc(collection(db!, BLOG_COLLECTION), testBlogPost);
    console.log('Test blog post created with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating test blog post:', error);
    throw error;
  }
};

// Create a new blog post
export const createBlogPost = async (blogData: BlogFormData): Promise<string> => {
  try {
    checkFirebaseAvailability();

    // Image URL is already set to /images/{filename} from the form
    const imageUrl = blogData.imageUrl || '';

    const blogPost: Omit<BlogPost, 'id'> = {
      ...blogData,
      imageUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('Creating blog post with data:', {
      title: blogPost.title,
      slug: blogPost.slug,
      status: blogPost.status,
      hasImage: !!imageUrl,
      imageType: imageUrl?.substring(0, 20)
    });

    // Convert dates to Firestore Timestamps if needed
    // Normalize slug (trim whitespace) and status (lowercase) for consistency
    const firestoreData: any = {
      title: blogPost.title,
      content: blogPost.content,
      excerpt: blogPost.excerpt || '',
      imageUrl: imageUrl,
      publishDate: blogPost.publishDate || new Date().toISOString().split('T')[0],
      slug: sanitizeSlug(blogPost.slug || ''),
      primaryKeyword: blogPost.primaryKeyword,
      metaTitle: blogPost.metaTitle,
      metaDescription: blogPost.metaDescription,
      status: blogPost.status?.toLowerCase() || 'draft',
      tags: blogPost.tags || [],
      createdAt: blogPost.createdAt instanceof Date ? blogPost.createdAt : new Date(blogPost.createdAt),
      updatedAt: blogPost.updatedAt instanceof Date ? blogPost.updatedAt : new Date(blogPost.updatedAt)
    };

    // Add optional description field if it exists
    if (blogPost.description) firestoreData.description = blogPost.description;

    // Add optional fields if they exist
    if (blogPost.canonicalUrl) firestoreData.canonicalUrl = blogPost.canonicalUrl;
    if (blogPost.ogImageUrl) firestoreData.ogImageUrl = blogPost.ogImageUrl;
    if (blogPost.jsonLdCode) firestoreData.jsonLdCode = blogPost.jsonLdCode;
    if (blogPost.breadcrumbCode) firestoreData.breadcrumbCode = blogPost.breadcrumbCode;
    if (blogPost.faqCode) firestoreData.faqCode = blogPost.faqCode;
    if (blogPost.medicalConditionCode) firestoreData.medicalConditionCode = blogPost.medicalConditionCode;
    if (blogPost.author) firestoreData.author = blogPost.author;

    console.log('Saving to Firestore...');
    const docRef = await addDoc(collection(db!, BLOG_COLLECTION), firestoreData);
    console.log('Blog post created successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    checkFirebaseAvailability();

    const q = query(collection(db!, BLOG_COLLECTION));
    const querySnapshot = await getDocs(q);

    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];

    // Sort by publishDate in descending order (most recent first: 2026, 2025, 2024, etc.)
    posts.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB.getTime() - dateA.getTime(); // Descending order
    });

    return posts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Get published blog posts only
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    checkFirebaseAvailability();

    // Use a simpler query without orderBy to avoid index requirements
    const q = query(
      collection(db!, BLOG_COLLECTION),
      where('status', '==', 'published')
    );

    const querySnapshot = await getDocs(q);

    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];

    // Sort by publishDate in descending order (most recent first: 2026, 2025, 2024, etc.)
    posts.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB.getTime() - dateA.getTime(); // Descending order
    });

    return posts;
  } catch (error) {
    console.error('Error getting published blog posts:', error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    checkFirebaseAvailability();

    const docRef = doc(db!, BLOG_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting blog post by ID:', error);
    throw error;
  }
};

// Get a blog post by URL slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    checkFirebaseAvailability();

    // Normalize slug: trim whitespace and convert to lowercase for comparison
    const normalizedSlug = slug.trim().toLowerCase();
    console.log('Searching for blog post with slug:', slug, '(normalized:', normalizedSlug + ')');

    // Helper function to normalize status for comparison
    const normalizeStatus = (status: string | undefined): string => {
      if (!status) return '';
      return String(status).trim().toLowerCase();
    };

    // Helper function to normalize slug for comparison
    const normalizeSlugForComparison = (slugValue: string | undefined): string => {
      if (!slugValue) return '';
      return String(slugValue).trim().toLowerCase();
    };

    // First try to find by slug only (to debug)
    const qBySlug = query(
      collection(db!, BLOG_COLLECTION),
      where('slug', '==', slug.trim())
    );
    const slugSnapshot = await getDocs(qBySlug);

    console.log(`Found ${slugSnapshot.size} post(s) with slug "${slug.trim()}"`);

    if (!slugSnapshot.empty) {
      slugSnapshot.docs.forEach((doc, index) => {
        const data = doc.data();
        const docSlug = normalizeSlugForComparison(data.slug);
        const docStatus = normalizeStatus(data.status);
        console.log(`Post ${index + 1}:`, {
          id: doc.id,
          title: data.title,
          slug: data.slug,
          normalizedSlug: docSlug,
          slugMatch: docSlug === normalizedSlug,
          status: data.status,
          normalizedStatus: docStatus,
          isPublished: docStatus === 'published',
          hasContent: !!data.content,
          hasPrimaryKeyword: !!data.primaryKeyword,
          hasMetaTitle: !!data.metaTitle
        });
      });

      // Check if any post has status 'published' (case-insensitive)
      const publishedPost = slugSnapshot.docs.find(doc => {
        const data = doc.data();
        const docSlug = normalizeSlugForComparison(data.slug);
        const docStatus = normalizeStatus(data.status);
        return docSlug === normalizedSlug && docStatus === 'published';
      });

      if (publishedPost) {
        const postData = {
          id: publishedPost.id,
          ...publishedPost.data()
        } as BlogPost;
        console.log('Returning published post:', {
          id: postData.id,
          title: postData.title,
          slug: postData.slug,
          status: postData.status
        });
        return postData;
      } else {
        // If no published post found, show all statuses
        const statuses = slugSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            raw: data.status,
            normalized: normalizeStatus(data.status),
            slug: data.slug,
            normalizedSlug: normalizeSlugForComparison(data.slug)
          };
        });
        console.warn(`Post with slug "${slug}" exists but status is not "published". Statuses found:`, statuses);
        console.warn('Please change the post status to "published" in the admin dashboard.');
      }
    }

    // Also try the query with status filter (in case there's an index issue)
    try {
      const q = query(
        collection(db!, BLOG_COLLECTION),
        where('slug', '==', slug.trim()),
        where('status', '==', 'published')
      );
      const querySnapshot = await getDocs(q);

      console.log(`Query with status filter found ${querySnapshot.size} published post(s) with slug "${slug.trim()}"`);

      if (!querySnapshot.empty) {
        // Find the one that matches the normalized slug (in case of case differences)
        const matchingDoc = querySnapshot.docs.find(doc => {
          const docSlug = normalizeSlugForComparison(doc.data().slug);
          return docSlug === normalizedSlug;
        }) || querySnapshot.docs[0];

        const postData = {
          id: matchingDoc.id,
          ...matchingDoc.data()
        } as BlogPost;
        console.log('Returning post from filtered query:', {
          id: postData.id,
          title: postData.title,
          slug: postData.slug,
          status: postData.status
        });
        return postData;
      }
    } catch (queryError: any) {
      console.error('Error with status filter query (might need Firestore index):', queryError);
      // If query fails due to missing index, fall back to getting all and filtering in JS
      if (queryError.code === 'failed-precondition' || queryError.message?.includes('index')) {
        console.log('Firestore index might be missing, trying alternative approach...');
        // Get all posts with this slug and filter in JavaScript
        if (!slugSnapshot.empty) {
          const publishedPost = slugSnapshot.docs.find(doc => {
            const data = doc.data();
            const docSlug = normalizeSlugForComparison(data.slug);
            const docStatus = normalizeStatus(data.status);
            return docSlug === normalizedSlug && docStatus === 'published';
          });
          if (publishedPost) {
            const postData = {
              id: publishedPost.id,
              ...publishedPost.data()
            } as BlogPost;
            console.log('Returning published post (filtered in JS):', {
              id: postData.id,
              title: postData.title,
              slug: postData.slug,
              status: postData.status
            });
            return postData;
          }
        }
      }
    }

    // Last resort: get all published posts and find by slug (case-insensitive)
    console.log('Trying alternative: get all published posts and filter by slug...');
    try {
      const allPublished = await getPublishedBlogPosts();
      const matchingPost = allPublished.find(post => {
        const postSlug = normalizeSlugForComparison(post.slug);
        return postSlug === normalizedSlug;
      });
      if (matchingPost) {
        console.log('Found post using alternative method:', {
          id: matchingPost.id,
          title: matchingPost.title,
          slug: matchingPost.slug,
          status: matchingPost.status
        });
        return matchingPost;
      }
    } catch (altError) {
      console.error('Error with alternative method:', altError);
    }

    console.warn(`No published post found with slug "${slug}".`);
    return null;
  } catch (error) {
    console.error('Error getting blog post by slug:', error);
    throw error;
  }
};

// Update a blog post
export const updateBlogPost = async (id: string, blogData: Partial<BlogFormData>): Promise<void> => {
  try {
    checkFirebaseAvailability();

    // Image URL is already set to /images/{filename} from the form
    const imageUrl = blogData.imageUrl;

    const updateData: any = {
      ...blogData,
      imageUrl,
      updatedAt: new Date(),
      publishDate: blogData.publishDate || new Date().toISOString().split('T')[0]
    };

    // Normalize slug and status for consistency
    if (updateData.slug) {
      updateData.slug = sanitizeSlug(updateData.slug);
    }
    if (updateData.status) {
      updateData.status = updateData.status.toLowerCase();
    }

    console.log('Updating blog post with data:', updateData);
    const docRef = doc(db!, BLOG_COLLECTION, id);
    await updateDoc(docRef, updateData);
    console.log('Blog post updated successfully');
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    checkFirebaseAvailability();

    console.log('Deleting blog post with ID:', id);

    // Delete the document directly (no need to delete images since we use URLs)
    const docRef = doc(db!, BLOG_COLLECTION, id);
    await deleteDoc(docRef);

    console.log('Blog post deleted successfully');
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}; 