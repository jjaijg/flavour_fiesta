// /** @type {import('next').NextConfig} */
import { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db";
import type { NextAuthConfig } from "next-auth";

const authUrls = ["/login", "signup"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  adapter: <Adapter>MongoDBAdapter(clientPromise),
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
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;

export default authConfig;
