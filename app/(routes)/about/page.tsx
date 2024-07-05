import About from '@/components/pages/About';
import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@/app/api/auth/login/auth';

const page = async () => {
  const session = await auth();
  if (!session) redirect('/login');
  return <About />;
};

export default page;
