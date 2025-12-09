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
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';
import { BlogPost, BlogFormData } from '../types/blog';

const BLOG_COLLECTION = 'blog-posts';

// Helper function to check if Firebase is available
const checkFirebaseAvailability = () => {
  if (!db) {
    throw new Error('Firestore is not configured. Please set up your Firebase credentials in .env.local');
  }
  if (!storage) {
    throw new Error('Firebase Storage is not configured. Please set up your Firebase credentials in .env.local');
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
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop',
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
export const createBlogPost = async (blogData: BlogFormData, imageFile?: File): Promise<string> => {
  try {
    checkFirebaseAvailability();
    
    let imageUrl = blogData.imageUrl;
    
    // If we already have a base64 image, check its size first
    if (imageFile && blogData.imageUrl && blogData.imageUrl.startsWith('data:')) {
      const base64Size = new Blob([blogData.imageUrl]).size;
      const maxSize = 1000000; // 1MB limit for Firestore (with some buffer)
      
      if (base64Size > maxSize) {
        console.warn('Base64 image is too large for Firestore, using placeholder');
        imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
      } else {
        console.log('Using base64 image from form (skipping Storage upload to avoid CORS issues)');
        imageUrl = blogData.imageUrl;
      }
    } else if (imageFile) {
      // Try to upload to Storage, but with timeout to prevent hanging
      try {
        console.log('Attempting to upload image to Firebase Storage...');
        const timestamp = Date.now();
        const imageName = `blog-images/${timestamp}-${imageFile.name}`;
        const imageRef = ref(storage!, imageName);
        
        // Add timeout to prevent hanging
        const uploadPromise = uploadBytes(imageRef, imageFile);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Upload timeout')), 10000)
        );
        
        await Promise.race([uploadPromise, timeoutPromise]);
        imageUrl = await getDownloadURL(imageRef);
        console.log('Image uploaded successfully to Storage:', imageUrl);
      } catch (uploadError: any) {
        console.error('Image upload failed (CORS or timeout):', uploadError);
        // Use base64 if available and not too large, otherwise placeholder
        if (blogData.imageUrl && blogData.imageUrl.startsWith('data:')) {
          const base64Size = new Blob([blogData.imageUrl]).size;
          const maxSize = 1000000; // 1MB limit for Firestore (with some buffer)
          
          if (base64Size > maxSize) {
            console.warn('Base64 image is too large for Firestore, using placeholder');
            imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
          } else {
            imageUrl = blogData.imageUrl;
            console.log('Using base64 image as fallback');
          }
        } else {
          imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
          console.warn('Using placeholder image');
        }
      }
    }
    
    // Only use placeholder if no image URL is provided and no file is uploaded
    if (!imageUrl && !imageFile) {
      console.log('No image provided, using placeholder');
      imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
    }

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
      description: blogPost.description,
      content: blogPost.content,
      imageUrl: imageUrl,
      publishDate: blogPost.publishDate || new Date().toISOString().split('T')[0],
      slug: blogPost.slug?.trim() || '',
      primaryKeyword: blogPost.primaryKeyword,
      metaTitle: blogPost.metaTitle,
      metaDescription: blogPost.metaDescription,
      status: blogPost.status?.toLowerCase() || 'draft',
      tags: blogPost.tags || [],
      createdAt: blogPost.createdAt instanceof Date ? blogPost.createdAt : new Date(blogPost.createdAt),
      updatedAt: blogPost.updatedAt instanceof Date ? blogPost.updatedAt : new Date(blogPost.updatedAt)
    };
    
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
    
    // Sort in JavaScript instead of Firestore
    posts.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
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
    
    // Sort in JavaScript instead of Firestore
    posts.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
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
export const updateBlogPost = async (id: string, blogData: Partial<BlogFormData>, imageFile?: File): Promise<void> => {
  try {
    checkFirebaseAvailability();
    
    let imageUrl = blogData.imageUrl;
    
    // Upload image file to Firebase Storage if provided
    if (imageFile) {
      try {
        console.log('Uploading image to Firebase Storage...');
        const timestamp = Date.now();
        const imageName = `blog-images/${timestamp}-${imageFile.name}`;
        const imageRef = ref(storage!, imageName);
        
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
        console.log('Image uploaded successfully:', imageUrl);
      } catch (uploadError: any) {
        console.error('Image upload failed (CORS or other error):', uploadError);
        // If upload fails and we have a base64 imageUrl from the form, use it
        // Otherwise use placeholder
        if (!blogData.imageUrl || !blogData.imageUrl.startsWith('data:')) {
          imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
          console.warn('Using placeholder image. Please fix Firebase Storage CORS configuration.');
        } else {
          // Use the base64 image that was already converted
          imageUrl = blogData.imageUrl;
          console.log('Using base64 image as fallback due to Storage upload failure');
        }
        // Don't throw error - allow post to be updated
      }
    }
    
    // Only use placeholder if no image URL is provided and no file is uploaded
    if (!imageUrl && !imageFile) {
      console.log('No image provided, using placeholder');
      imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
    }

    const updateData: any = {
      ...blogData,
      imageUrl,
      updatedAt: new Date(),
      publishDate: blogData.publishDate || new Date().toISOString().split('T')[0]
    };
    
    // Normalize slug and status for consistency
    if (updateData.slug) {
      updateData.slug = updateData.slug.trim();
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

// Update existing blog posts with placeholder images to use real images
export const updatePlaceholderImages = async (): Promise<void> => {
  try {
    checkFirebaseAvailability();
    
    console.log('Updating placeholder images...');
    
    const allPosts = await getAllBlogPosts();
    const postsWithPlaceholders = allPosts.filter(post => 
      post.imageUrl && post.imageUrl.includes('data:image/svg+xml;base64')
    );
    
    console.log(`Found ${postsWithPlaceholders.length} posts with placeholder images`);
    
    for (const post of postsWithPlaceholders) {
      if (post.id) {
        const updateData = {
          imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop',
          updatedAt: new Date()
        };
        
        const docRef = doc(db!, BLOG_COLLECTION, post.id);
        await updateDoc(docRef, updateData);
        console.log(`Updated post: ${post.title}`);
      }
    }
    
    console.log('Placeholder images update completed');
  } catch (error) {
    console.error('Error updating placeholder images:', error);
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