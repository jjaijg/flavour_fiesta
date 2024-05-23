import React from "react";
import { auth } from "@/app/api/auth/login/auth";
import { redirect } from "next/navigation";

type Props = {};

const Home = async (props: Props) => {
  const session = await auth();

  if (!session) redirect("/login");

  return <div>{session.user?.email}</div>;
};

export default Home;
