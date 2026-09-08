'use client';

import React from 'react';
import { BlogFormData } from '../types/blog';
import { getBlogSitemapEntry } from '../lib/site';

type BlogSchemaFieldsProps = {
  formData: BlogFormData;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SCHEMA_FIELDS: Array<{
  name: keyof BlogFormData;
  label: string;
  placeholder: string;
  rows: number;
}> = [
  {
    name: 'jsonLdCode',
    label: 'JSON-LD Code',
    placeholder: '{"@context": "https://schema.org", "@type": "Article", ...}',
    rows: 6,
  },
  {
    name: 'blogPostingCode',
    label: 'BlogPosting Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "BlogPosting", ...}',
    rows: 6,
  },
  {
    name: 'personCode',
    label: 'Person Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "Person", ...}',
    rows: 5,
  },
  {
    name: 'dentistCode',
    label: 'Dentist Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "Dentist", ...}',
    rows: 5,
  },
  {
    name: 'faqCode',
    label: 'FAQ Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "FAQPage", ...}',
    rows: 6,
  },
  {
    name: 'breadcrumbCode',
    label: 'Breadcrumb Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "BreadcrumbList", ...}',
    rows: 4,
  },
  {
    name: 'medicalConditionCode',
    label: 'MedicalCondition Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "MedicalCondition", ...}',
    rows: 6,
  },
  {
    name: 'howToCode',
    label: 'HowTo / HowToStep Schema',
    placeholder: '{"@context": "https://schema.org", "@type": "HowTo", "step": [{"@type": "HowToStep", ...}]}',
    rows: 6,
  },
];

export default function BlogSchemaFields({ formData, onChange }: BlogSchemaFieldsProps) {
  const sitemapEntry = formData.slug.trim()
    ? getBlogSitemapEntry(formData.slug)
    : '';

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="sitemapEntry" className="block text-sm font-medium text-gray-700 mb-2">
          Sitemap Entry
        </label>
        <input
          type="url"
          id="sitemapEntry"
          name="sitemapEntry"
          value={sitemapEntry}
          readOnly
          placeholder="https://www.nusmiledentalca.com/blog/your-post-slug"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        />
        <p className="mt-1 text-sm text-gray-500">
          This is the live sitemap URL for this post. It always uses <code>/blog/</code> plus the slug.
        </p>
      </div>

      {SCHEMA_FIELDS.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
            {field.label}
          </label>
          <textarea
            id={field.name}
            name={field.name}
            value={String(formData[field.name] || '')}
            onChange={onChange}
            rows={field.rows}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          />
        </div>
      ))}
    </div>
  );
}
