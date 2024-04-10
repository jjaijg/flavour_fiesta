"use server";

import { signIn } from "@/app/auth/login/auth";
import { AuthError } from "next-auth";

export const authenticate = async (prevState: any, formData: FormData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
