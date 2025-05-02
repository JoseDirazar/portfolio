"use client";
import { useTranslation } from "react-i18next";
import { ServicesSection } from "./sections/ServicesSection";
import { ClientsSection } from "./sections/ClientsSection";
import { ContactForm } from "./forms/ContactForm";
import Team from "./team/TeamSection";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b px-4"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text pb-3 text-6xl font-extrabold tracking-tighter text-transparent md:text-7xl lg:text-8xl">
            {t("hero.title", { ns: "forgebytes" })}
          </h1>
          <p className="text-2xl text-gray-600 md:text-3xl dark:text-gray-300">
            {t("hero.subtitle", { ns: "forgebytes" })}
          </p>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            {t("hero.description", { ns: "forgebytes" })}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Team Section */}
      <section className="rounded-md bg-white py-20 dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("team.title", { ns: "forgebytes" })}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("team.subtitle", { ns: "forgebytes" })}
            </p>
          </div>
          <Team />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("contact.title", { ns: "forgebytes" })}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("contact.subtitle", { ns: "forgebytes" })}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function BlurBackground() {
  return (
    <>
      <div className="m:w-90 absolute right-0 -bottom-30 -z-10 h-100 w-70 rounded-full bg-fuchsia-100 blur-[8rem] md:right-1/7 md:w-120 lg:w-150 dark:bg-zinc-700 dark:blur-3xl" />
      <div className="m:w-90 absolute top-20 left-0 -z-10 h-100 w-70 rounded-full bg-violet-200 blur-[8rem] md:left-1/9 md:w-120 lg:w-150 dark:bg-stone-700 dark:blur-3xl" />
    </>
  );
}
