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

    console.log('Creating blog post with data:', blogPost);
    const docRef = await addDoc(collection(db!, BLOG_COLLECTION), blogPost);
    console.log('Blog post created with ID:', docRef.id);
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
    
    const q = query(
      collection(db!, BLOG_COLLECTION),
      where('slug', '==', slug),
      where('status', '==', 'published')
    );
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      } as BlogPost;
    } else {
      return null;
    }
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
    
    // Only use placeholder if no image URL is provided and no file is uploaded
    if (!imageUrl && !imageFile) {
      console.log('No image provided, using placeholder');
      imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmxvZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
    }

    const updateData = {
      ...blogData,
      imageUrl,
      updatedAt: new Date()
    };

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