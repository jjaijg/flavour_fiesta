import { redirect } from "next/navigation";
import { auth } from "./api/auth/login/auth";
import HeroSection from "@/layout/HeroSection";

export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <main>
      <HeroSection />
    </main>
  );
}
