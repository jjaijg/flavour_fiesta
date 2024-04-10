import { redirect } from "next/navigation";
import { auth } from "./auth/login/auth";
import HeroSection from "@/layout/HeroSection";

export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/auth/signin");
  return (
    <main>
      <HeroSection />
    </main>
  );
}
