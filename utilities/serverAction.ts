'use server';

import { signOut } from '@/app/api/auth/login/auth';

export const handleSignOut = async () => {
  await signOut();
};
