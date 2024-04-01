import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import User from "@/db/model/user.model";
import { connectToDb } from "@/db";

import { authConfig } from "./auth.config";

connectToDb();

async function getUser(username: string) {
  try {
    const user = await User.findOne<TUser>({ username });
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
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials, request) {
        try {
          const parsedCredentials = z
            .object({
              username: z.string(),
              password: z.string().min(5),
            })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { username, password } = parsedCredentials.data;
            const user = await getUser(username);
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
  ],
  secret: process.env.AUTH_SECRET!,
});
