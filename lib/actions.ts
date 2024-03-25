"use server";
import { signIn } from "@/app/auth";

interface AuthError {
  type: string;
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const user = await signIn("credentials", {
      redirect: false,
      username: formData.get("username"),
      password: formData.get("password"),
    });

    console.log({ user });
  } catch (error: any) {
    const authError = error as AuthError;
    if (authError && authError.type) {
      switch (authError.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    } else {
      console.log("auth error ", authError);
      return "Something went wrong.";
    }
    throw authError;
  }
}
