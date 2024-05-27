import { DefaultUser } from "next-auth";
declare module "next-auth" {
  export interface User extends DefaultUser, TUser {}

  export interface Session {
    user: Omit<User, "matchPassword", "password">;
  }
}
