# Cloudinary Blog Integration - Complete Setup Guide

## ✅ What's Implemented

Your blog now uses **Cloudinary CDN** for image storage while keeping blog data in **Firebase Firestore**.

### Architecture

```
Blog Admin Form
      ↓
   Upload Image → Cloudinary CDN
      ↓
   Get URL: https://res.cloudinary.com/...
      ↓
   Save Blog Data + Image URL → Firebase Firestore
      ↓
   Display Blog → Image loads from Cloudinary
```

## 🚀 Quick Start

### Step 1: Create Cloudinary Upload Preset (REQUIRED!)

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Click **Settings** (gear icon) → **Upload** tab
3. Scroll to **"Upload presets"** section
4. Click **"Add upload preset"**
5. Configure:
   ```
   Preset name: blog_images
   Signing mode: Unsigned ✓ (IMPORTANT!)
   Folder: nusmiles-blog
   Unique filename: Yes ✓
   ```
6. Click **"Save"**

**Why Unsigned?** Allows direct browser uploads without exposing API secrets.

### Step 2: Test the Integration

1. **Go to**: http://localhost:3002/admin/login
2. **Login** with your Firebase admin credentials
3. **Click**: "New Post"
4. **Upload an image**:
   - Click "Choose File"
   - Select image (JPG, PNG, WebP, GIF - max 10MB)
   - Wait for upload (progress bar shows)
   - See success message and preview
5. **Fill in blog details** (title, content, SEO fields)
6. **Click**: "Create Blog Post"
7. **Verify**:
   - Image stored in Cloudinary
   - Blog data + Cloudinary URL in Firebase Firestore
   - Blog displays correctly on frontend

## 📋 Configuration Files

### Environment Variables (.env.local)

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDMk6qQt-cfSX9G_cuByKjLYyZLKQBmGws
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nusmiles-blog.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nusmiles-blog
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nusmiles-blog.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=770959663153
NEXT_PUBLIC_FIREBASE_APP_ID=1:770959663153:web:a2c5e71b3b8d1babf8f510
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-3MXZBK69H2

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dip8eus3y
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=blog_images
CLOUDINARY_API_KEY=573439595262432
CLOUDINARY_API_SECRET=zlGJxoEkw3eDSYWKzEDuBz727Ps
```

## 📁 File Structure

```
src/
├── lib/
│   ├── cloudinaryService.ts     # Image upload & management
│   ├── blogService.ts            # Firebase Firestore operations
│   └── firebase.ts               # Firebase initialization
├── app/
│   ├── api/
│   │   └── cloudinary/
│   │       └── delete/
│   │           └── route.ts      # Server-side deletion API
│   └── admin/
│       ├── new-post/page.tsx     # Create blog with image upload
│       └── edit-post/[id]/page.tsx  # Edit blog with image upload
└── types/
    └── blog.ts                   # TypeScript types
```

## 💾 Firebase Firestore Schema

### Collection: `blog-posts`

```typescript
{
  // Required Fields
  title: string;                    // "Complete Guide to Dental Implants"
  content: string;                  // HTML content from editor
  imageUrl: string;                 // Cloudinary URL
  publishDate: string;              // "2026-01-21"
  slug: string;                     // "dental-implants-guide"
  primaryKeyword: string;           // "dental implants"
  metaTitle: string;                // SEO title (max 60 chars)
  metaDescription: string;          // SEO description (max 160 chars)
  status: 'draft' | 'published';    // Publication status
  createdAt: Date;                  // Auto-generated
  updatedAt: Date;                  // Auto-updated
  
  // Optional Fields
  description?: string;
  tags?: string[];
  author?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  jsonLdCode?: string;
  breadcrumbCode?: string;
  faqCode?: string;
  medicalConditionCode?: string;
}
```

### Example Document

```json
{
  "title": "Complete Guide to Dental Implants",
  "content": "<h2>What are Dental Implants?</h2><p>...</p>",
  "imageUrl": "https://res.cloudinary.com/dip8eus3y/image/upload/v1737471234/nusmiles-blog/dental-implants.jpg",
  "slug": "dental-implants-guide",
  "status": "published",
  "publishDate": "2026-01-21",
  "primaryKeyword": "dental implants",
  "metaTitle": "Dental Implants Guide 2026",
  "metaDescription": "Complete guide to dental implants, costs, procedure...",
  "createdAt": "2026-01-21T10:30:00.000Z",
  "updatedAt": "2026-01-21T10:30:00.000Z"
}
```

## 💻 Code Examples

### 1. Create New Blog Post

```typescript
import { createBlogPost } from '@/lib/blogService';
import { uploadImageToCloudinary } from '@/lib/cloudinaryService';

async function handleCreatePost() {
  // Step 1: Upload image to Cloudinary
  const file = document.getElementById('imageInput').files[0];
  const cloudinaryUrl = await uploadImageToCloudinary(file);
  // Returns: "https://res.cloudinary.com/dip8eus3y/image/upload/..."
  
  // Step 2: Create blog post with Cloudinary URL
  const blogData = {
    title: 'Complete Guide to Dental Implants',
    content: '<h2>Introduction</h2><p>...</p>',
    imageUrl: cloudinaryUrl,  // Cloudinary URL, not Firebase!
    publishDate: '2026-01-21',
    slug: 'dental-implants-guide',
    primaryKeyword: 'dental implants',
    metaTitle: 'Dental Implants Guide 2026',
    metaDescription: 'Complete guide to dental implants...',
    status: 'published',
    tags: ['dental-implants', 'cosmetic-dentistry']
  };
  
  const postId = await createBlogPost(blogData);
  console.log('Blog post created with ID:', postId);
}
```

### 2. Read Blog Posts

```typescript
import { 
  getAllBlogPosts,
  getPublishedBlogPosts,
  getBlogPostBySlug 
} from '@/lib/blogService';

// Get all posts (admin dashboard)
const allPosts = await getAllBlogPosts();

// Get published posts only (public blog page)
const publishedPosts = await getPublishedBlogPosts();

// Get single post by slug
const post = await getBlogPostBySlug('dental-implants-guide');
console.log('Image URL:', post.imageUrl);  // Cloudinary URL
```

### 3. Update Blog Post

```typescript
import { updateBlogPost, getBlogPostById } from '@/lib/blogService';
import { uploadImageToCloudinary } from '@/lib/cloudinaryService';

async function handleUpdatePost(postId: string) {
  // Get existing post
  const existingPost = await getBlogPostById(postId);
  
  // Option A: Keep existing image
  await updateBlogPost(postId, {
    title: 'Updated Title',
    content: '<h2>Updated content</h2>',
    // imageUrl stays the same (existing Cloudinary URL)
  });
  
  // Option B: Upload new image
  const newFile = document.getElementById('imageInput').files[0];
  if (newFile) {
    const newImageUrl = await uploadImageToCloudinary(newFile);
    await updateBlogPost(postId, {
      title: 'Updated Title',
      imageUrl: newImageUrl  // New Cloudinary URL
    });
  }
}
```

### 4. Delete Blog Post

```typescript
import { deleteBlogPost } from '@/lib/blogService';

async function handleDeletePost(postId: string) {
  await deleteBlogPost(postId);
  // Blog data deleted from Firestore
  // Image remains in Cloudinary (no automatic deletion)
}
```

### 5. Image Validation

```typescript
import { validateImageFile } from '@/lib/cloudinaryService';

function handleFileSelect(file: File) {
  const validation = validateImageFile(file);
  
  if (!validation.valid) {
    alert(validation.error);
    // Possible errors:
    // - "Invalid file type. Allowed types: JPG, PNG, WebP, GIF"
    // - "File size exceeds 10MB limit"
    return;
  }
  
  // File is valid, proceed with upload
}
```

### 6. Optimized Image Display

```typescript
import { getOptimizedImageUrl } from '@/lib/cloudinaryService';

function BlogPostCard({ post }) {
  // Get optimized thumbnail (400x300)
  const thumbnailUrl = getOptimizedImageUrl(post.imageUrl, {
    width: 400,
    height: 300,
    quality: 80,
    format: 'auto'  // Auto-selects best format (WebP, AVIF, etc.)
  });
  
  // Get full-size image for detail page
  const fullSizeUrl = getOptimizedImageUrl(post.imageUrl, {
    width: 1200,
    quality: 85,
    format: 'auto'
  });
  
  return (
    <div>
      <img src={thumbnailUrl} alt={post.title} />
    </div>
  );
}
```

## 🎨 Image URL Examples

### Original Cloudinary URL
```
https://res.cloudinary.com/dip8eus3y/image/upload/v1737471234/nusmiles-blog/dental-implants.jpg
```

### Optimized URL (400x300, quality 80, auto format)
```
https://res.cloudinary.com/dip8eus3y/image/upload/w_400,h_300,c_fill,q_80,f_auto/v1737471234/nusmiles-blog/dental-implants.jpg
```

### URL Transformations
- `w_400` - Width 400px
- `h_300` - Height 300px
- `c_fill` - Crop to fill dimensions
- `q_80` - Quality 80%
- `f_auto` - Auto format (WebP/AVIF for supported browsers)

## 🔧 Troubleshooting

### Error: "Upload preset 'blog_images' not found"

**Cause**: Haven't created the unsigned upload preset in Cloudinary.

**Solution**: 
1. Go to Cloudinary Dashboard → Settings → Upload
2. Create unsigned preset named `blog_images`
3. Try uploading again

### Error: "Cloudinary configuration is missing"

**Cause**: Environment variables not loaded.

**Solution**:
1. Verify `.env.local` has all Cloudinary variables
2. Restart dev server: `npm run dev`
3. Hard refresh browser (Ctrl+Shift+R)

### Image not uploading

**Checks**:
- File size under 10MB?
- File type JPG/PNG/WebP/GIF?
- Internet connection stable?
- Browser console for errors?
- Cloudinary dashboard shows upload?

### Image URL not saving to Firestore

**Checks**:
- Wait for upload to complete (100%)
- Check browser console for errors
- Verify Firebase credentials in `.env.local`
- Check Firebase Console → Firestore for document

## 📊 Benefits

### vs Firebase Storage

| Feature | Firebase Storage | Cloudinary |
|---------|------------------|------------|
| CDN Speed | Basic | Advanced Global CDN |
| Image Optimization | Manual | Automatic |
| Transformations | None | On-the-fly |
| Bandwidth (Free) | 1GB/day | 25GB/month |
| Setup Complexity | Auth required | Unsigned uploads |
| URL Format | Long Firebase URLs | Clean, transformable |

### Key Advantages

1. **Faster Loading**: Global CDN with edge caching
2. **Auto Optimization**: WebP, AVIF format conversion
3. **No Auth Required**: Direct browser uploads with unsigned preset
4. **Flexible Resizing**: On-URL transformations (no re-upload needed)
5. **Cost Effective**: Generous free tier (25GB bandwidth/month)

## 🔐 Security Best Practices

1. **Never expose API secret** in client code
2. **Use unsigned upload presets** for client uploads
3. **Validate files** before upload (type, size)
4. **Set Firestore rules** to allow admin-only writes
5. **Use environment variables** for all credentials

## 📚 Resources

- [Cloudinary Dashboard](https://cloudinary.com/console)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Firebase Console](https://console.firebase.google.com/)
- [Image Transformation Guide](https://cloudinary.com/documentation/image_transformations)

## ✅ Testing Checklist

- [ ] Created Cloudinary upload preset (`blog_images`)
- [ ] Environment variables configured
- [ ] Dev server restarted
- [ ] Can access admin dashboard
- [ ] Can upload image (sees progress bar)
- [ ] Image preview shows after upload
- [ ] Can create blog post
- [ ] Blog post appears in dashboard
- [ ] Image loads on frontend
- [ ] Can edit existing blog post
- [ ] Can upload new image on edit
- [ ] Can delete blog post

## 🎉 You're All Set!

Your blog now has:
- ✅ Image uploads to Cloudinary CDN
- ✅ Blog data in Firebase Firestore
- ✅ Clean separation of concerns
- ✅ Automatic image optimization
- ✅ Fast global delivery

Happy blogging! 🚀
