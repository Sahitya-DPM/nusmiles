/**
 * Cloudinary Service
 * Handles image uploads to Cloudinary for blog posts
 * Images are stored in Cloudinary CDN, URLs are saved in Firebase Firestore
 */

// Client-side upload function (uses unsigned upload preset)
export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error('Cloudinary configuration is missing. Please check your .env.local file.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'nusmiles-blog'); // Organize images in a folder

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to upload image to Cloudinary');
    }

    const data = await response.json();
    console.log('Image uploaded to Cloudinary:', data.secure_url);
    return data.secure_url; // Returns the HTTPS URL of the uploaded image
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};

// Get optimized image URL with transformations
export const getOptimizedImageUrl = (imageUrl: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
}): string => {
  if (!imageUrl.includes('cloudinary.com')) {
    return imageUrl; // Not a Cloudinary URL, return as-is
  }

  const { width, height, quality = 80, format = 'auto' } = options || {};
  
  // Build transformation string
  const transformations: string[] = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  transformations.push('c_fill'); // Crop to fill the dimensions
  
  // Insert transformations into URL
  const parts = imageUrl.split('/upload/');
  if (parts.length === 2) {
    return `${parts[0]}/upload/${transformations.join(',')}/${parts[1]}`;
  }
  
  return imageUrl;
};

// Delete image from Cloudinary (server-side only)
export const deleteImageFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    const response = await fetch('/api/cloudinary/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicId }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete image from Cloudinary');
    }
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error);
    throw error;
  }
};

// Extract Cloudinary public ID from URL
export const extractPublicIdFromUrl = (imageUrl: string): string | null => {
  if (!imageUrl.includes('cloudinary.com')) {
    return null;
  }

  try {
    const parts = imageUrl.split('/upload/');
    if (parts.length < 2) return null;

    const pathParts = parts[1].split('/');
    // Remove version (v1234567890) if present
    const filteredParts = pathParts.filter(part => !part.startsWith('v'));
    
    // Get the filename without extension
    const fileName = filteredParts[filteredParts.length - 1];
    const publicId = fileName.split('.')[0];
    
    // Include folder if present
    if (filteredParts.length > 1) {
      return filteredParts.slice(0, -1).join('/') + '/' + publicId;
    }
    
    return publicId;
  } catch (error) {
    console.error('Error extracting public ID from URL:', error);
    return null;
  }
};

// Validate image file
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Allowed types: JPG, PNG, WebP, GIF'
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size exceeds 10MB limit'
    };
  }

  return { valid: true };
};
