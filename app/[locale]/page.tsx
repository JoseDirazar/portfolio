import { i18nConfig } from "@/lib/i18nConfig";
import initTranslations from "@/lib/i18n";

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("welcome")}</h1>
    </main>
  );
}
