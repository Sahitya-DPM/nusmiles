import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCanonicalBlogSlug } from './lib/site';

function normalizePathname(pathname: string): string {
  return pathname
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, '');
}

function hasNonAsciiCharacters(pathname: string): boolean {
  return /[^\x00-\x7F]/.test(pathname);
}

function canonicalizeBlogPath(pathname: string): string | null {
  const blogMatch = pathname.match(/^\/blog\/(?!category\/)(.+)$/);
  if (!blogMatch) {
    return null;
  }

  let rawSlug = blogMatch[1];
  try {
    rawSlug = decodeURIComponent(rawSlug);
  } catch {
    // Keep the raw slug if it is not valid URI encoding.
  }

  const canonicalSlug = getCanonicalBlogSlug(rawSlug);
  if (!canonicalSlug || canonicalSlug === rawSlug) {
    return null;
  }

  return `/blog/${canonicalSlug}`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const canonicalBlogPath = canonicalizeBlogPath(pathname);
  if (canonicalBlogPath) {
    url.pathname = canonicalBlogPath;
    return NextResponse.redirect(url, 301);
  }

  if (!hasNonAsciiCharacters(pathname)) {
    return NextResponse.next();
  }

  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === pathname) {
    return NextResponse.next();
  }

  url.pathname = normalizedPath;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|xml|txt|ico)$).*)',
  ],
};
