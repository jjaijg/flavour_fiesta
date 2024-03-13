import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    console.log("form data ; ", formData);
    await signIn("credentials", formData);
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
