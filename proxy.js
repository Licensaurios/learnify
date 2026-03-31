import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'  // 👈 agrega createRouteMatcher
import { NextResponse } from 'next/server'

// 👇 muévelo ANTES de usarlo
// const isPublicRoute = createRouteMatcher([
//   '/login(.*)',
//   '/registro(.*)',
//   '/landing(.*)',
// ])

// rutas protegidas
const isProtectedRoute = createRouteMatcher([ 
  '/usuario(.*)',
  '/post/new(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const session = await auth();
    
    if (!session.userId) {
      const loginUrl = new URL('/landing', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
});
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}