'use client';

import React from 'react';
import { Node, mergeAttributes } from '@tiptap/core';
import { NodeViewWrapper, ReactNodeViewRenderer, type NodeViewProps } from '@tiptap/react';
import {
  CODE_LANGUAGE_OPTIONS,
  encodeRawCode,
  RAW_CODE_TYPE,
  resolveCodeLanguage,
} from '../lib/rawCode';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    rawCode: {
      insertRawCode: (attrs: { language: string; code: string }) => ReturnType;
    };
  }
}

function RawCodeNodeView({ node, updateAttributes, deleteNode, selected }: NodeViewProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [draftLanguage, setDraftLanguage] = React.useState(node.attrs.language || 'html');
  const [draftCode, setDraftCode] = React.useState(node.attrs.code || '');

  const language = node.attrs.language || 'html';
  const code = node.attrs.code || '';
  const preview = code.length > 600 ? `${code.slice(0, 600)}\n…` : code;

  const handleSave = () => {
    if (!draftCode.trim()) {
      return;
    }
    updateAttributes({
      language: resolveCodeLanguage(draftLanguage, draftCode),
      code: draftCode,
    });
    setIsEditing(false);
  };

  return (
    <NodeViewWrapper className="raw-code-node">
      <div
        className={`my-3 rounded-md border ${
          selected ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-300'
        } bg-slate-900 text-slate-100 overflow-hidden`}
      >
        <div className="flex items-center justify-between gap-2 px-3 py-2 bg-slate-800 text-xs">
          <span className="uppercase tracking-wide text-slate-300">
            {resolveCodeLanguage(language, code)}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setDraftLanguage(language);
                setDraftCode(code);
                setIsEditing((current) => !current);
              }}
              className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button
              type="button"
              onClick={deleteNode}
              className="px-2 py-1 rounded bg-red-700 hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
        {isEditing ? (
          <div className="p-3 space-y-2 bg-slate-900">
            <select
              value={draftLanguage}
              onChange={(e) => setDraftLanguage(e.target.value)}
              className="w-full px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded"
            >
              {CODE_LANGUAGE_OPTIONS.filter((option) => option.value !== 'auto').map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <textarea
              value={draftCode}
              onChange={(e) => setDraftCode(e.target.value)}
              rows={10}
              className="w-full px-2 py-2 text-sm font-mono text-slate-100 bg-slate-950 border border-slate-700 rounded"
            />
            <button
              type="button"
              onClick={handleSave}
              className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Save code
            </button>
          </div>
        ) : (
          <pre className="p-3 text-xs overflow-x-auto whitespace-pre-wrap break-words">
            <code>{preview || 'Empty code block'}</code>
          </pre>
        )}
      </div>
    </NodeViewWrapper>
  );
}

export const RawCode = Node.create({
  name: 'rawCode',
  group: 'block',
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      language: {
        default: 'html',
        parseHTML: (element) => element.getAttribute('data-language') || 'html',
        renderHTML: () => ({}),
      },
      code: {
        default: '',
        parseHTML: (element) => {
          const encoded = element.getAttribute('data-code');
          if (encoded) {
            try {
              return decodeURIComponent(encoded);
            } catch {
              return encoded;
            }
          }
          return element.innerHTML || '';
        },
        renderHTML: () => ({}),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `div[data-type="${RAW_CODE_TYPE}"]`,
      },
    ];
  },

  renderHTML({ node }) {
    const language = node.attrs.language || 'html';
    const code = node.attrs.code || '';

    return [
      'div',
      mergeAttributes({
        'data-type': RAW_CODE_TYPE,
        'data-language': language,
        'data-code': encodeRawCode(code),
        class: 'raw-code-block',
      }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(RawCodeNodeView);
  },

  addCommands() {
    return {
      insertRawCode:
        (attrs) =>
        ({ chain }) =>
          chain()
            .insertContent({
              type: this.name,
              attrs: {
                language: resolveCodeLanguage(attrs.language, attrs.code),
                code: attrs.code,
              },
            })
            .insertContent({ type: 'paragraph' })
            .run(),
    };
  },
});

export default RawCode;
