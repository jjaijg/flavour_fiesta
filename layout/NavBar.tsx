'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Button from '@/components/inputs/Button';
import { handleSignOut } from '@/utilities/serverAction';
import { useSession } from 'next-auth/react';

const NavBar = () => {
  // const session = await auth();
  const { data: session, status } = useSession();

  const menus = [
    { name: 'about', path: '/about' },
    { name: 'recipes', path: '/recipes' },
    { name: 'cuisins', path: '/cuisins' },
    { name: 'kitchen tips', path: '/kitchen-tips' },
    { name: 'day plans', path: '/day-plans' },
  ];

  const cuisins = [
    'Mexican',
    'Italian',
    'Chinese',
    'Indian',
    'German',
    'Greek',
    'Filipino',
    'Japanese',
    'American',
  ];

  return (
    <nav className="flex items-center justify-center p-5 shadow-md uppercase font-medium bg-transparent">
      <Link href="./" className="flex gap-2">
        <Image src={logo} width={30} height={30} alt="Picture of logo" />
        <span>Flavour Fiesta</span>
      </Link>
      <ul className="flex flex-1 justify-end mr-20">
        {menus.map((menu, i) => (
          <li className="px-5" key={i}>
            <Link href={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      {!session ? (
        <>
          <Link href={'/login'}>
            <Button label="Login" className="mr-4" />
          </Link>
          <Link href={'/signup'}>
            <Button label="Sign Up" />
          </Link>
        </>
      ) : (
        <form action={handleSignOut}>
          <Button label="Sign out" />
        </form>
      )}
    </nav>
  );
};

export default NavBar;
