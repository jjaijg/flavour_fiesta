import Recipes from '@/components/pages/Recipes';
import { redirect } from 'next/navigation';
import { auth } from '@/app/api/auth/login/auth';

const page = async () => {
  const session = await auth();
  if (!session) redirect('/login');
  return <Recipes />;
};

export default page;
