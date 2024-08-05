import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const protectedRoutes = ['/panel', '/admin'];
      const isProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));
      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        return false;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;