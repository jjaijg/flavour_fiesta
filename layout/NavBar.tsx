import Link from "next/link";
import React from "react";

const NavBar = () => {
  const menus = ["RECIPES", "CUISINS", "KICHEN TIPS"];

  const recipes = [
    "Starter",
    "main course",
    "break fast",
    "lunch",
    "Dinner",
    "Snacks & Appetizers",
    "Dessert",
    "Drinks",
    "Salads",
    "Soups",
  ];
  const cuisins = [
    "Mexican",
    " Italian",
    " Chinese",
    " Indian",
    " German",
    " Greek",
    " Filipino",
    "Japanese",
    "American",
  ];

  return (
    <nav className="flex p-5 shadow-md">
      <Link href="./">Flavour Fiesta</Link>
      <ul className="flex flex-1 justify-end mr-20">
        {menus.map((menu, i) => (
          <li className="px-5  " key={i}>
            <Link href="/home">{menu}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/login"}>
        <button className="pr-4">Login</button>
      </Link>
      <Link href={"/signup"}>
        <button>Sign Up</button>
      </Link>
    </nav>
  );
};

export default NavBar;
