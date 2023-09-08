import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center" >
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
/* className="flex min-h-screen flex-col items-center justify-between p-24" */