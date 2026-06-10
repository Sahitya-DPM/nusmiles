import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function normalizePathname(pathname: string): string {
  return pathname
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, '');
}

function hasNonAsciiCharacters(pathname: string): boolean {
  return /[^\x00-\x7F]/.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!hasNonAsciiCharacters(pathname)) {
    return NextResponse.next();
  }

  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === pathname) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = normalizedPath;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|xml|txt|ico)$).*)',
  ],
};
