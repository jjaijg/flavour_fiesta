'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Button from '@/components/inputs/Button';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { handleSignOut } from '@/utilities/serverAction';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import DropDown from '@/components/ui/DropDown';

interface IMenuItems {
  name: string;
  dropDown?: boolean;
  path?: string;
}

const menusItems: IMenuItems[] = [
  { name: 'about', path: '/about' },
  { name: 'recipes', dropDown: true },
  { name: 'cuisins', path: '/cuisins' },
  { name: 'kitchen tips', path: '/kitchen-tips' },
  { name: 'day plans', path: '/day-plans' },
];

const NavBar = () => {
  const { data: session, status } = useSession();
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleDropdownClick = (itemName: string) => {
    setDropdown(dropdown === itemName ? null : itemName);
  };

  return (
    <nav className="flex items-center justify-between p-5 shadow-md uppercase font-medium bg-transparent">
      <Link href="/" className="flex gap-2">
        <Image src={logo} width={30} height={30} alt="Logo" />
        <span>Flavour Fiesta</span>
      </Link>
      <ul className="flex flex-1 justify-end">
        {menusItems.map((item, index) => (
          <li
            key={index}
            className={`${item.name === 'recipes' ? 'relative pr-1' : 'px-5'}`}
          >
            {item.dropDown ? (
              <>
                <span onClick={() => handleDropdownClick(item.name)}>
                  {item.name}
                  {item.name === 'recipes' &&
                    (dropdown ? (
                      <BiSolidUpArrow className="inline ml-2" />
                    ) : (
                      <BiSolidDownArrow className="inline ml-2" />
                    ))}
                </span>

                {dropdown === item.name && (
                  <DropDown isOpen={dropdown === item.name} />
                )}
              </>
            ) : (
              <Link href={item.path || '#'}>{item.name}</Link>
            )}
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
