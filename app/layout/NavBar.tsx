import { auth, signOut } from "@/app/config/auth";
import Link from "next/link";
import React from "react";

const NavBar = async () => {
  const session = await auth();

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

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
      {!session ? (
        <>
          <Link href={"/login"}>
            <button className="pr-4">Login</button>
          </Link>
          <Link href={"/signup"}>
            <button>Sign Up</button>
          </Link>
        </>
      ) : (
        <form action={handleSignOut}>
          <button>Sign out</button>
        </form>
      )}
    </nav>
  );
};

export default NavBar;
