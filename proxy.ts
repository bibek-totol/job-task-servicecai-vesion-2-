// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken } from "./lib/auth";

export const SESSION_COOKIE_NAME = "site_session";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const secret = process.env.SITE_PASSWORD_SECRET || "";

  // 1. Allow login route
  if (pathname === "/login") {
    // If user already holds a valid session, redirect away from /login to homepage
    const cookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const isValid = await verifySessionToken(cookie, secret);
    if (isValid) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // 2. Validate current session cookie
  const cookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = await verifySessionToken(cookie, secret);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  // 3. Unauthenticated -> Redirect to /login with original path preserved
  const loginUrl = new URL("/login", request.url);
  const fromPath = pathname + search;
  if (fromPath && fromPath !== "/") {
    loginUrl.searchParams.set("from", fromPath);
  }

  return NextResponse.redirect(loginUrl);
}

export default proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static chunks, css)
     * - _next/image (image optimization API)
     * - assets/ (public logos, marks, icons)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
