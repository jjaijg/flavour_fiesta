import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";
import bcrypt from "bcrypt";
import User from "@/db/model/user.model";
import { connectToDb } from "@/db";
import { authConfig } from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db";

connectToDb();

async function getUser(email: string) {
  try {
    const user = await User.findOne<TUser>({ email });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials, request) {
        try {
          const parsedCredentials = z
            .object({
              email: z.string().email(),
              password: z.string().min(5),
            })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (passwordsMatch) return user;
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
});
