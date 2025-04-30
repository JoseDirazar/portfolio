import ExampleClientComponent from "@/components/ExampleClientComponent";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["common"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log(locale);
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={""}>
        <h1>{t("hero.title")}</h1>
        <ExampleClientComponent />
      </main>
    </TranslationsProvider>
  );
}
