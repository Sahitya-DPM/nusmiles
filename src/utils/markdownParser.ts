/**
 * Simple markdown parser for converting SimpleTextEditor content to HTML
 */

export function parseMarkdown(markdown: string): string {
  if (!markdown) return '';

  let html = markdown;

  // First, temporarily replace HTML tags to protect them from markdown processing
  const htmlPlaceholders: string[] = [];
  let placeholderIndex = 0;

  // Store HTML content and replace with placeholders
  html = html.replace(/<[^>]*>/g, (match) => {
    htmlPlaceholders.push(match);
    return `__HTML_PLACEHOLDER_${placeholderIndex++}__`;
  });

  // Convert headings first
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-2">$1</h3>');

  // Convert bold text (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert italic text (*text*)
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>');

  // Convert lists
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  
  // Wrap consecutive list items in <ul> tags
  html = html.replace(/(<li>.*<\/li>)/gs, (match) => {
    const items = match.split('</li><li>').map(item => 
      item.replace('<li>', '').replace('</li>', '')
    );
    return '<ul class="list-disc list-inside space-y-1 mb-4">' + 
           items.map(item => `<li>${item}</li>`).join('') + 
           '</ul>';
  });

  // Handle line breaks and paragraphs
  // First, split by double line breaks to identify paragraphs
  const paragraphs = html.split(/\n\n+/);
  
  html = paragraphs.map(paragraph => {
    const trimmed = paragraph.trim();
    if (!trimmed) return '';
    
    // If it's already a heading, list, or other HTML element, don't wrap in p
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<li') || trimmed.startsWith('__HTML_PLACEHOLDER_')) {
      return trimmed;
    }
    
    // Convert single line breaks to <br> within paragraphs
    const withBreaks = trimmed.replace(/\n/g, '<br>');
    return `<p class="mb-4">${withBreaks}</p>`;
  }).join('');

  // Clean up empty paragraphs
  html = html.replace(/<p class="mb-4"><\/p>/g, '');
  html = html.replace(/<p class="mb-4"><br><\/p>/g, '');

  // Restore HTML content from placeholders
  htmlPlaceholders.forEach((htmlContent, index) => {
    html = html.replace(`__HTML_PLACEHOLDER_${index}__`, htmlContent);
  });

  return html;
} 