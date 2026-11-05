import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with server-side credentials
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * DELETE Image from Cloudinary
 * 
 * This endpoint deletes an image from Cloudinary using the public ID.
 * It requires server-side API credentials (CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET).
 */
export async function POST(request: NextRequest) {
  try {
    const { publicId } = await request.json();

    if (!publicId) {
      return NextResponse.json(
        { success: false, message: 'Public ID is required' },
        { status: 400 }
      );
    }

    // Verify Cloudinary configuration
    if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { success: false, message: 'Cloudinary API credentials are not configured' },
        { status: 500 }
      );
    }

    // Delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok' || result.result === 'not found') {
      return NextResponse.json({
        success: true,
        result,
        message: result.result === 'not found' ? 'Image not found (may have been already deleted)' : 'Image deleted successfully'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to delete image', result },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error deleting image from Cloudinary:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
