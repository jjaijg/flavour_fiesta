// /** @type {import('next').NextConfig} */
import type { NextAuthConfig } from "next-auth";

const authUrls = ["/login", "signup"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        const { pathname } = nextUrl;
        if (authUrls.includes(pathname))
          return Response.redirect(new URL("/", nextUrl));

        return true;
        // Response.redirect(new URL(nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

export default authConfig;
