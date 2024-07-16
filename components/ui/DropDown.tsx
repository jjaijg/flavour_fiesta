import Link from 'next/link';
import React from 'react';

interface Recipe {
  name: string;
  path: string;
}

interface DropDownProps {
  isOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ isOpen }) => {
  const recipes: Recipe[] = [
    { name: 'Mexican', path: '/recipes/mexican' },
    { name: 'Italian', path: '/recipes/italian' },
    { name: 'Chinese', path: '/recipes/chinese' },
    { name: 'Indian', path: '/recipes/indian' },
    { name: 'German', path: '/recipes/german' },
    { name: 'Greek', path: '/recipes/greek' },
    { name: 'Filipino', path: '/recipes/filipino' },
    { name: 'Japanese', path: '/recipes/japanese' },
    { name: 'American', path: '/recipes/american' },
  ];
  return (
    <>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-10">
          {recipes.map((recipe, index) => (
            <li className="px-4 py-2 hover:bg-gray-200" key={index}>
              <Link href={recipe.path}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDown;
