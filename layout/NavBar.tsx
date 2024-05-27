import { auth, signOut } from "@/app/api/auth/login/auth";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Button from "@/components/inputs/Button";

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
      <Link href="./" className="flex gap-2">
        <Image src={logo} width={30} height={30} alt="Picture of logo" />
        <span>Flavour Fiesta</span>
      </Link>
      <ul className="flex flex-1 justify-end mr-20">
        {menus.map((menu, i) => (
          <li className="px-5  " key={i}>
            <Link href="/">{menu}</Link>
          </li>
        ))}
      </ul>
      {!session ? (
        <>
          <Link href={"/login"}>
            <Button label="Login" className="pr-4" />
          </Link>
          <Link href={"/signup"}>
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
