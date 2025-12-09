'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Placeholder from '@tiptap/extension-placeholder';

interface WordPressEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const WordPressEditor: React.FC<WordPressEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your blog post content here...',
  className = ''
}) => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Strike,
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
        style: 'font-family: Hind, Arial, Helvetica, sans-serif; font-size: 16px;',
      },
    },
  });

  React.useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  const MenuBar = () => (
    <div className="border-b border-gray-300 bg-gray-50 p-2 flex flex-wrap gap-1 rounded-t-md">
      {/* Headings */}
      <select
        onChange={(e) => {
          const level = parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
          if (level === 0) {
            editor.chain().focus().setParagraph().run();
          } else {
            editor.chain().focus().toggleHeading({ level }).run();
          }
        }}
        value={
          editor.isActive('heading', { level: 1 })
            ? '1'
            : editor.isActive('heading', { level: 2 })
            ? '2'
            : editor.isActive('heading', { level: 3 })
            ? '3'
            : editor.isActive('heading', { level: 4 })
            ? '4'
            : editor.isActive('heading', { level: 5 })
            ? '5'
            : editor.isActive('heading', { level: 6 })
            ? '6'
            : '0'
        }
        className="px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50"
      >
        <option value="0">Paragraph</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>

      <div className="border-l border-gray-300 mx-1" />

      {/* Text Formatting */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('bold') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('italic') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('underline') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Underline"
      >
        <u>U</u>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('strike') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Strikethrough"
      >
        <s>S</s>
      </button>

      <div className="border-l border-gray-300 mx-1" />

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('bulletList') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Bullet List"
      >
        •
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('orderedList') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Numbered List"
      >
        1.
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('blockquote') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Quote"
      >
        "
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('codeBlock') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Code Block"
      >
        {'</>'}
      </button>

      <div className="border-l border-gray-300 mx-1" />

      {/* Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Align Left"
      >
        ⬅
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Align Center"
      >
        ⬌
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Align Right"
      >
        ➡
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Justify"
      >
        ⬌
      </button>

      <div className="border-l border-gray-300 mx-1" />

      {/* Link */}
      <button
        onClick={() => {
          const url = window.prompt('Enter URL:');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          editor.isActive('link') ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Insert Link"
      >
        🔗
      </button>

      {/* Image */}
      <button
        onClick={() => {
          const url = window.prompt('Enter image URL:');
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50"
        title="Insert Image"
      >
        🖼
      </button>

      <div className="border-l border-gray-300 mx-1" />

      {/* Color */}
      <input
        type="color"
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
        title="Text Color"
      />

      <div className="border-l border-gray-300 mx-1" />

      {/* Undo/Redo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Undo"
      >
        ↶
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Redo"
      >
        ↷
      </button>
    </div>
  );

  return (
    <div className={`wordpress-editor border border-gray-300 rounded-md ${className}`}>
      <MenuBar />
      <EditorContent editor={editor} />
      <style jsx global>{`
        .wordpress-editor .ProseMirror {
          outline: none;
          min-height: 400px;
          padding: 1rem;
        }
        .wordpress-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
        .wordpress-editor .ProseMirror .is-empty::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
        .wordpress-editor .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
        }
        .wordpress-editor .ProseMirror a {
          color: #2563eb;
          text-decoration: underline;
        }
        .wordpress-editor .ProseMirror a:hover {
          color: #1e40af;
        }
        .wordpress-editor .ProseMirror blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
        }
        .wordpress-editor .ProseMirror code {
          background-color: #f3f4f6;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: monospace;
        }
        .wordpress-editor .ProseMirror pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .wordpress-editor .ProseMirror pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }
        .wordpress-editor .ProseMirror ul,
        .wordpress-editor .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        .wordpress-editor .ProseMirror h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1rem 0;
        }
        .wordpress-editor .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.75rem 0;
        }
        .wordpress-editor .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .wordpress-editor .ProseMirror h4,
        .wordpress-editor .ProseMirror h5,
        .wordpress-editor .ProseMirror h6 {
          font-weight: bold;
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default WordPressEditor;
