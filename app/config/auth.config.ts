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
      console.log("in other pages");
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export default authConfig;
