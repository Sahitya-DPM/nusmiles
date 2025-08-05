'use client';

import React, { useState } from 'react';

interface SimpleTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SimpleTextEditor: React.FC<SimpleTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your blog post content here...',
  className = ''
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const [showHtmlModal, setShowHtmlModal] = useState(false);
  const [htmlCode, setHtmlCode] = useState('');

  const handleFormat = (format: string) => {
    const textarea = document.getElementById('simple-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    let formattedText = '';
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'h1':
        formattedText = `# ${selectedText}`;
        break;
      case 'h2':
        formattedText = `## ${selectedText}`;
        break;
      case 'h3':
        formattedText = `### ${selectedText}`;
        break;
      case 'list':
        formattedText = `- ${selectedText}`;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        break;
      case 'linebreak':
        formattedText = `${selectedText}\n\n`;
        break;
      default:
        formattedText = selectedText;
    }

    const newValue = value.substring(0, start) + formattedText + value.substring(end);
    onChange(newValue);

    // Restore focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + formattedText.length);
    }, 0);
  };

  const handleInsertHtml = () => {
    if (!htmlCode.trim()) return;

    const textarea = document.getElementById('simple-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    // Insert HTML code at cursor position
    const newValue = value.substring(0, start) + htmlCode + value.substring(end);
    onChange(newValue);
    
    // Close modal and reset
    setShowHtmlModal(false);
    setHtmlCode('');
    
    // Restore focus and set cursor after inserted HTML
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + htmlCode.length, start + htmlCode.length);
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle Enter key for line breaks
    if (e.key === 'Enter') {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      const newValue = value.substring(0, start) + '\n\n' + value.substring(end);
      onChange(newValue);
      
      // Set cursor position after the line break
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }, 0);
    }
  };

  const renderPreview = () => {
    return (
      <div className="prose prose-lg max-w-none p-4 border rounded-md bg-white">
        <div 
          dangerouslySetInnerHTML={{ 
            __html: value
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
              .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3">$1</h2>')
              .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-2">$1</h3>')
              .replace(/^- (.*$)/gm, '<li>$1</li>')
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(.*)$/gm, '<p>$1</p>')
              .replace(/<p><\/p>/g, '')
              .replace(/<p><h[1-3]/g, '<h$1')
              .replace(/<\/h[1-3]><\/p>/g, '</h$1>')
              .replace(/<p><li>/g, '<ul class="list-disc list-inside space-y-1 mb-4"><li>')
              .replace(/<\/li><\/p>/g, '</li></ul>')
          }}
        />
      </div>
    );
  };

  return (
    <div className={`simple-text-editor ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 border border-gray-200 rounded-t-md">
        <button
          type="button"
          onClick={() => handleFormat('h1')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => handleFormat('h2')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => handleFormat('h3')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="Heading 3"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => handleFormat('bold')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 font-bold"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleFormat('italic')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 italic"
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => handleFormat('list')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="List"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => handleFormat('link')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="Link"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => handleFormat('linebreak')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          title="Line Break"
        >
          ↵
        </button>
        <button
          type="button"
          onClick={() => setShowHtmlModal(true)}
          className="px-2 py-1 text-sm bg-purple-500 text-white border border-purple-500 rounded hover:bg-purple-600"
          title="Insert HTML"
        >
          &lt;/&gt;
        </button>
        <button
          type="button"
          onClick={() => setIsPreview(!isPreview)}
          className="px-2 py-1 text-sm bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-600"
        >
          {isPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      {/* Editor */}
      {!isPreview ? (
        <textarea
          id="simple-editor"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full h-64 p-4 border border-gray-200 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        />
      ) : (
        <div className="w-full h-64 border border-gray-200 rounded-b-md overflow-y-auto">
          {renderPreview()}
        </div>
      )}

      {/* HTML Modal */}
      {showHtmlModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Insert HTML Code</h3>
            
            {/* HTML Templates */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Quick Templates:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setHtmlCode(`<div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
  <strong>Info:</strong> This is an informational message.
</div>`)}
                  className="text-xs p-2 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100"
                >
                  Info Alert
                </button>
                <button
                  onClick={() => setHtmlCode(`<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
  <strong>Success:</strong> This is a success message.
</div>`)}
                  className="text-xs p-2 bg-green-50 border border-green-200 rounded hover:bg-green-100"
                >
                  Success Alert
                </button>
                <button
                  onClick={() => setHtmlCode(`<div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
  <strong>Warning:</strong> This is a warning message.
</div>`)}
                  className="text-xs p-2 bg-yellow-50 border border-yellow-200 rounded hover:bg-yellow-100"
                >
                  Warning Alert
                </button>
                <button
                  onClick={() => setHtmlCode(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
  <strong>Error:</strong> This is an error message.
</div>`)}
                  className="text-xs p-2 bg-red-50 border border-red-200 rounded hover:bg-red-100"
                >
                  Error Alert
                </button>
                <button
                  onClick={() => setHtmlCode(`<div class="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-4">
  <h4 class="text-lg font-bold mb-2">Card Title</h4>
  <p class="text-gray-600">This is a card with some content.</p>
</div>`)}
                  className="text-xs p-2 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100"
                >
                  Card
                </button>
                <button
                  onClick={() => setHtmlCode(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
  Click Me
</button>`)}
                  className="text-xs p-2 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100"
                >
                  Button
                </button>
                <button
                  onClick={() => setHtmlCode(`<table class="min-w-full border border-gray-300 mb-4">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2">Header 1</th>
      <th class="border border-gray-300 px-4 py-2">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Data 1</td>
      <td class="border border-gray-300 px-4 py-2">Data 2</td>
    </tr>
  </tbody>
</table>`)}
                  className="text-xs p-2 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100"
                >
                  Table
                </button>
                <button
                  onClick={() => setHtmlCode(`<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-4">
  <h3 class="text-xl font-bold mb-2">Gradient Box</h3>
  <p>This is a beautiful gradient background.</p>
</div>`)}
                  className="text-xs p-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded hover:from-blue-100 hover:to-purple-100"
                >
                  Gradient Box
                </button>
              </div>
            </div>

            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="Enter your HTML code here...&#10;Example:&#10;&lt;div class='bg-blue-100 p-4 rounded'&gt;&#10;  &lt;h4&gt;Custom Content&lt;/h4&gt;&#10;  &lt;p&gt;This is custom HTML content.&lt;/p&gt;&#10;&lt;/div&gt;"
              className="w-full h-48 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowHtmlModal(false);
                  setHtmlCode('');
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleInsertHtml}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Insert HTML
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help text */}
      <div className="mt-2 text-sm text-gray-500">
        <p><strong>Formatting Guide:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>**text**</strong> for bold</li>
          <li><em>*text*</em> for italic</li>
          <li><strong># Heading</strong> for H1</li>
          <li><strong>## Heading</strong> for H2</li>
          <li><strong>### Heading</strong> for H3</li>
          <li><strong>- item</strong> for lists</li>
          <li><strong>[text](url)</strong> for links</li>
          <li><strong>Press Enter</strong> for line breaks</li>
          <li><strong>&lt;/&gt; button</strong> to insert custom HTML code</li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleTextEditor; 