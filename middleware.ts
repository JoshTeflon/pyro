import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Keep locale middleware on app routes and explicitly include `/`.
  matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};