"use server";

import { signIn } from "@/auth";

interface AuthError {
  type: string;
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error: any) {
    const authError = error as AuthError;
    if (authError && authError.type) {
      switch (authError.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw authError;
  }
}
