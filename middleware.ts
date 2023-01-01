import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = request.nextUrl
  const hostname = request.headers.get("host")
  
  const currHost = process.env.NODE_ENV == "development" ? hostname?.replace(".localhost:3000", "") : hostname?.replace(".linkku.cc", "")

  if(pathname.includes("_sites")) {
    return new Response(null, { status: 403 })
  }

  if(currHost == "auth" || currHost == "app") {
    url.pathname = currHost == "auth" && pathname == "/" ? `/_sites/${currHost}/join` : `/_sites/${currHost}${pathname}`
    return NextResponse.rewrite(url)
  } 
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
}