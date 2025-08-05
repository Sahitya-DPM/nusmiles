import React, { Suspense } from 'react';
import EditBlogPostContent from './EditBlogPostContent';

interface EditBlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading editor...</div>
        </div>
      </div>
    }>
      <EditBlogPostContent id={id} />
    </Suspense>
  );
} 