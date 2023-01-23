import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get("host")
  const sub = host?.split(".")[0]

  /**
   * In development, i use localtest.me and i had no idea why there's a request from localhost
   * And there's a pathname even tho i didnt specify any at the search bar
   * For now the hacky fix was adding condition checking if host was localhost
   * And checking if sub equal app and pathname equal to "/"
   * If someone could explain to me why this happening, it would be a great help!
   */

  if(host !== process.env.NEXTAUTH_URL!.split(".").slice(1).join(".") && !host?.startsWith("localhost")) {
    if(sub === "auth" && pathname === "/") {
      return NextResponse.rewrite(new URL(`/_sites/${sub}/signup`, request.url))
    } else if (sub === "app" && pathname === "/") {
      return NextResponse.rewrite(new URL(`/_sites/${sub}`, request.url))
    } else {
      return NextResponse.rewrite(new URL(`/_sites/${sub}${pathname}`, request.url))
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}