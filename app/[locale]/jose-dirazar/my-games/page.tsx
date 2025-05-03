import initTranslations from "@/app/i18n";
import Projects from "@/components/jose-dirazar/portfolio/projects";
import { getTranslatedData, i18nNamespaces } from "@/lib/data";

export default async function MyGamesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const { gamesData } = getTranslatedData(t);

  return (
    <Projects
      projectsData={gamesData}
      projectTitle={t("games.title")}
      locale={locale}
    />
  );
}
