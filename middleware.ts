import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get("host")?.split(":")[0]
  const sub = host?.split(".")[0]

  if(host !== "linkku.cc" && host !== "localhost") {
    if(sub === "auth" && pathname == "/") {
      return NextResponse.rewrite(new URL(`/_sites/${sub}/signup`, request.url))
    }
    return NextResponse.rewrite(new URL(`/_sites/${sub}${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}