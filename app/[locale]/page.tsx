import LandingPage from "@/components/forgebyteslab/LandingPage";
import TranslationsProvider from "@/components/TranslationsProvider";
import { i18nNamespaces } from "@/lib/data";
import initTranslations from "../i18n";
import { LanguageSwitcher } from "@/components/forgebyteslab/common/LanguageSwitcher";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col items-center px-4">
        <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm dark:bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-secondary dark:text-white">
                  ForgeBytes Lab
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>
        <LandingPage />
      </main>
    </TranslationsProvider>
  );
}
