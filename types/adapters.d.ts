import type { AdapterUser as BaseAdapterUser } from "next-auth/adapters";

declare module "@auth/core/adapters" {
  export interface AdapterUser extends BaseAdapterUser, TUser {
    id?: string;
  }
}
