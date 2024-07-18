'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Button from '@/components/inputs/Button';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { handleSignOut } from '@/utilities/serverAction';
import { BiMenu, BiX } from 'react-icons/bi';

interface IMenuItems {
  name: string;
  path: string;
}

const menusItems: IMenuItems[] = [
  { name: 'about', path: '/about' },
  { name: 'recipes', path: '/recipes' },
  { name: 'cuisines', path: '/cuisines' },
  { name: 'kitchen tips', path: '/kitchen-tips' },
  { name: 'day plans', path: '/day-plans' },
];

const NavBar = () => {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-5 shadow-md uppercase font-medium bg-transparent">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src={logo} width={30} height={30} alt="Logo" />
        </Link>
        <span className="hidden md:inline">Flavour Fiesta</span>
      </div>

      {/* -------------------for desktop screen-------------------- */}
      <ul className="hidden md:flex flex-1 justify-end flex-wrap">
        {menusItems.map((item, index) => (
          <li key={index} className="px-5">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-2 mt-4 md:mt-0">
        {!session ? (
          <>
            <Link href={'/login'}>
              <Button label="Login" className="mr-2 md:mr-4" />
            </Link>
            <Link href={'/signup'}>
              <Button label="Sign Up" />
            </Link>
          </>
        ) : (
          <form action={handleSignOut} className="hidden sm:block">
            <Button label="Sign out" />
          </form>
        )}
      </div>

      {/* -----------------for mobile and iPad screen--------------------- */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="ml-4">
          <BiMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transform transition-transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden w-2/3 p-5`}
      >
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
          <BiX size={24} />
        </button>
        <ul className="mt-8">
          {menusItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          {!session ? (
            <>
              <Link href={'/login'}>
                <Button label="Login" className="w-full mb-2" />
              </Link>
              <Link href={'/signup'}>
                <Button label="Sign Up" className="w-full" />
              </Link>
            </>
          ) : (
            <form action={handleSignOut} className="w-full">
              <Button label="Sign out" className="w-full" />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
