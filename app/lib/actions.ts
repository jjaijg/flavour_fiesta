"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

export const authenticate = async (prevState: any, formData: FormData) => {
  try {
    console.log({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("error : ", error);
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
