import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/', '/favicon.ico', '/robots.txt'];
const PUBLIC_PREFIXES = ['/_next/', '/static/', '/api/', '/_vercel/', '/fonts/'];

const isPublicPath = (pathname: string) => {
  if (PUBLIC_PATHS.includes(pathname)) return true;
  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix));
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get('techexaToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
