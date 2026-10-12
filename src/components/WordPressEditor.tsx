'use client';

import React from 'react';
import { useEditor, EditorContent, useEditorState } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Placeholder from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import RawCode from '../extensions/RawCodeExtension';

interface WordPressEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

interface TableInsertDialogProps {
  rows: number;
  cols: number;
  withHeaderRow: boolean;
  onRowsChange: (rows: number) => void;
  onColsChange: (cols: number) => void;
  onWithHeaderRowChange: (withHeaderRow: boolean) => void;
  onInsert: () => void;
  onClose: () => void;
}

const TableInsertDialog: React.FC<TableInsertDialogProps> = ({
  rows,
  cols,
  withHeaderRow,
  onRowsChange,
  onColsChange,
  onWithHeaderRowChange,
  onInsert,
  onClose,
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Insert Table</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="table-rows" className="block text-sm font-medium text-gray-700 mb-1">
            Rows
          </label>
          <input
            id="table-rows"
            type="number"
            min={1}
            max={20}
            value={rows}
            onChange={(e) => onRowsChange(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="table-cols" className="block text-sm font-medium text-gray-700 mb-1">
            Columns
          </label>
          <input
            id="table-cols"
            type="number"
            min={1}
            max={10}
            value={cols}
            onChange={(e) => onColsChange(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={withHeaderRow}
            onChange={(e) => onWithHeaderRowChange(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Include header row
        </label>
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onInsert}
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Insert
        </button>
      </div>
    </div>
  </div>
);

const WordPressEditor: React.FC<WordPressEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your blog post content here...',
  className = ''
}) => {
  const [showTableDialog, setShowTableDialog] = React.useState(false);
  const [tableRows, setTableRows] = React.useState(3);
  const [tableCols, setTableCols] = React.useState(3);
  const [withHeaderRow, setWithHeaderRow] = React.useState(true);
  const [isCodeMode, setIsCodeMode] = React.useState(false);
  const isCodeModeRef = React.useRef(false);

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
      Table.configure({
        resizable: true,
        renderWrapper: true,
        HTMLAttributes: {
          class: 'blog-table',
        },
      }),
      TableRow,
      TableHeader.configure({
        HTMLAttributes: {
          class: 'blog-table-header',
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'blog-table-cell',
        },
      }),
      RawCode,
    ],
    content: value,
    onUpdate: ({ editor: currentEditor }) => {
      if (isCodeModeRef.current) {
        return;
      }
      onChange(currentEditor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
        style: 'font-family: Hind, Arial, Helvetica, sans-serif; font-size: 16px;',
      },
    },
  });

  React.useEffect(() => {
    isCodeModeRef.current = isCodeMode;
  }, [isCodeMode]);

  React.useEffect(() => {
    if (!editor || isCodeMode) {
      return;
    }
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor, isCodeMode]);

  const isInTable = useEditorState({
    editor,
    selector: ({ editor: currentEditor }) => currentEditor?.isActive('table') ?? false,
  });

  const handleInsertTable = () => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertTable({ rows: tableRows, cols: tableCols, withHeaderRow })
      .run();
    setShowTableDialog(false);
    setTableRows(3);
    setTableCols(3);
    setWithHeaderRow(true);
  };

  const handleToggleCodeMode = () => {
    if (isCodeMode) {
      isCodeModeRef.current = false;
      setIsCodeMode(false);
      editor?.commands.setContent(value || '', { emitUpdate: false });
      return;
    }

    isCodeModeRef.current = true;
    setIsCodeMode(true);
  };

  if (!editor) {
    return null;
  }

  const toolbarButtonClass = (active = false) =>
    `px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
      active ? 'bg-blue-100 border-blue-300' : ''
    }`;

  const MenuBar = () => (
    <div className="sticky top-[52px] z-40 border border-gray-300 bg-gray-50 p-2 flex flex-wrap gap-1 rounded-t-md">
      {/* Headings */}
      <select
        onChange={(e) => {
          const levelValue = parseInt(e.target.value);
          if (levelValue === 0) {
            editor.chain().focus().setParagraph().run();
          } else if (levelValue >= 1 && levelValue <= 6) {
            const level = levelValue as 1 | 2 | 3 | 4 | 5 | 6;
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
        type="button"
        onClick={handleToggleCodeMode}
        className={`px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 ${
          isCodeMode ? 'bg-blue-100 border-blue-300' : ''
        }`}
        title="Code"
      >
        Code
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

      {/* Table */}
      <button
        type="button"
        onClick={() => setShowTableDialog(true)}
        className={toolbarButtonClass(editor.isActive('table'))}
        title="Insert Table"
      >
        ⊞ Table
      </button>

      {isInTable && (
        <>
          <div className="border-l border-gray-300 mx-1" />
          <button
            type="button"
            onClick={() => editor.chain().focus().addRowBefore().run()}
            className={toolbarButtonClass()}
            title="Add Row Above"
          >
            Row ↑
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addRowAfter().run()}
            className={toolbarButtonClass()}
            title="Add Row Below"
          >
            Row ↓
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteRow().run()}
            className={toolbarButtonClass()}
            title="Delete Row"
          >
            − Row
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            className={toolbarButtonClass()}
            title="Add Column Before"
          >
            Col ←
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            className={toolbarButtonClass()}
            title="Add Column After"
          >
            Col →
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteColumn().run()}
            className={toolbarButtonClass()}
            title="Delete Column"
          >
            − Col
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteTable().run()}
            className="px-3 py-1 text-sm border border-red-300 rounded bg-white hover:bg-red-50 text-red-600"
            title="Delete Table"
          >
            Delete Table
          </button>
        </>
      )}

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
    <div className={`wordpress-editor ${className}`}>
      <MenuBar />
      {showTableDialog && (
        <TableInsertDialog
          rows={tableRows}
          cols={tableCols}
          withHeaderRow={withHeaderRow}
          onRowsChange={setTableRows}
          onColsChange={setTableCols}
          onWithHeaderRowChange={setWithHeaderRow}
          onInsert={handleInsertTable}
          onClose={() => setShowTableDialog(false)}
        />
      )}
      <div className="border border-gray-300 border-t-0 rounded-b-md">
        {isCodeMode ? (
          <textarea
            id="body-code-editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={16}
            autoFocus
            placeholder={placeholder}
            className="w-full min-h-[400px] px-4 py-3 text-sm font-mono text-slate-100 bg-slate-950 border-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          />
        ) : (
          <EditorContent editor={editor} />
        )}
      </div>
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
        .wordpress-editor .ProseMirror .tableWrapper {
          overflow-x: auto;
          margin: 1rem 0;
        }
        .wordpress-editor .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          overflow: hidden;
        }
        .wordpress-editor .ProseMirror td,
        .wordpress-editor .ProseMirror th {
          min-width: 1em;
          border: 1px solid #d1d5db;
          padding: 8px 12px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }
        .wordpress-editor .ProseMirror th {
          font-weight: bold;
          text-align: left;
          background-color: #f3f4f6;
        }
        .wordpress-editor .ProseMirror .selectedCell::after {
          z-index: 2;
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.15);
          pointer-events: none;
        }
        .wordpress-editor .ProseMirror .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: -2px;
          width: 4px;
          background-color: #3b82f6;
          pointer-events: none;
        }
        .wordpress-editor .ProseMirror.resize-cursor {
          cursor: col-resize;
        }
      `}</style>
    </div>
  );
};

export default WordPressEditor;
