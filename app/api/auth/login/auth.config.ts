// /** @type {import('next').NextConfig} */
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authUrls = ["/login", "signup"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/home");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        const { pathname } = nextUrl;
        if (authUrls.includes(pathname))
          return Response.redirect(new URL("/home", nextUrl));

        return true;
        // Response.redirect(new URL(nextUrl));
      }
      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;
