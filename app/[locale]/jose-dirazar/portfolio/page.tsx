import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Header from "@/components/jose-dirazar/portfolio/header";
import Intro from "@/components/jose-dirazar/portfolio/intro";
import SectionDivider from "@/components/jose-dirazar/portfolio/section-divider";
import About from "@/components/jose-dirazar/portfolio/about";
import Skills from "@/components/jose-dirazar/portfolio/skills";
import Contact from "@/components/jose-dirazar/portfolio/contact";
import Footer from "@/components/jose-dirazar/portfolio/footer";
import { getTranslatedData, i18nNamespaces } from "@/lib/data";
import Experience from "@/components/jose-dirazar/portfolio/experience";
import Projects from "@/components/jose-dirazar/portfolio/projects";
import Link from "next/link";
import MyGames from "@/components/jose-dirazar/portfolio/MyGames";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const { projectsData } = getTranslatedData(t);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col items-center px-4">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects
          projectsData={projectsData}
          projectTitle={t("projects.title", { ns: "data" })}
        />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <MyGames />
        <Contact />
      </main>
      <Footer />
    </TranslationsProvider>
  );
}
