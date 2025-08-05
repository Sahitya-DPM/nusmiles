'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill with no SSR and proper error handling
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 animate-pulse rounded-md flex items-center justify-center">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  )
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your blog post content here...',
  className = ''
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Import CSS dynamically on client side
    const importCSS = async () => {
      try {
        await import('react-quill/dist/quill.snow.css');
      } catch (error) {
        console.warn('Failed to load Quill CSS:', error);
      }
    };
    
    importCSS();
  }, []);

  // Quill modules to attach to editor
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  };

  // Quill editor formats
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'indent',
    'color', 'background',
    'align',
    'link', 'image'
  ];

  // Show loading state while mounting
  if (!isMounted) {
    return (
      <div className={`rich-text-editor ${className}`}>
        <div className="h-64 bg-gray-100 animate-pulse rounded-md flex items-center justify-center">
          <div className="text-gray-500">Loading editor...</div>
        </div>
      </div>
    );
  }

  // Show error state if something went wrong
  if (hasError) {
    return (
      <div className={`rich-text-editor ${className}`}>
        <div className="h-64 bg-red-50 border border-red-200 rounded-md flex items-center justify-center">
          <div className="text-red-500">Editor failed to load. Please refresh the page.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rich-text-editor ${className}`}>
      <ErrorBoundary onError={() => setHasError(true)}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          style={{ 
            height: '300px',
            fontFamily: 'Hind, Arial, Helvetica, sans-serif'
          }}
        />
      </ErrorBoundary>
      
      {/* Custom styles for the editor */}
      <style jsx global>{`
        .rich-text-editor .ql-editor {
          min-height: 250px;
          font-family: 'Hind', Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.6;
        }
        
        .rich-text-editor .ql-toolbar {
          border-top: 1px solid #e5e7eb;
          border-left: 1px solid #e5e7eb;
          border-right: 1px solid #e5e7eb;
          border-bottom: none;
          background-color: #f9fafb;
        }
        
        .rich-text-editor .ql-container {
          border-bottom: 1px solid #e5e7eb;
          border-left: 1px solid #e5e7eb;
          border-right: 1px solid #e5e7eb;
          border-top: none;
        }
        
        .rich-text-editor .ql-editor:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .rich-text-editor .ql-toolbar button:hover,
        .rich-text-editor .ql-toolbar .ql-picker-label:hover {
          color: #3b82f6;
        }
        
        .rich-text-editor .ql-toolbar button.ql-active,
        .rich-text-editor .ql-toolbar .ql-picker-label.ql-active {
          color: #3b82f6;
        }
        
        .rich-text-editor .ql-toolbar .ql-stroke {
          stroke: currentColor;
        }
        
        .rich-text-editor .ql-toolbar .ql-fill {
          fill: currentColor;
        }
        
        .rich-text-editor .ql-toolbar .ql-picker {
          color: #374151;
        }
        
        .rich-text-editor .ql-toolbar .ql-picker-options {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('RichTextEditor error:', error, errorInfo);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-64 bg-red-50 border border-red-200 rounded-md flex items-center justify-center">
          <div className="text-red-500">Editor error. Please refresh.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RichTextEditor; 