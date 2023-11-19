import { url } from 'inspector';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === '/Login'|| path === '/Signin';
  const token = request.cookies.get('token')?.value||'';

  if(isPublic && token){
    return NextResponse.redirect(new URL('/Profile',request.nextUrl));
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL('/Login'||'/Signin',request.nextUrl));
  }
}
export const config = {
  matcher: [
    '/',
    '/Profile',
    '/Login',
    '/Signin'
  ],
}