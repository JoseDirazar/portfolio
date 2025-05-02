import SpaceInvaders from "@/components/jose-dirazar/games/space-invaders/space-invaders";
import TranslationsProvider from "@/components/TranslationsProvider";
import { i18nNamespaces } from "@/lib/data";
import initTranslations from "@/app/i18n";

export default async function SpaceInvadersPage({
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
      <SpaceInvaders />
    </TranslationsProvider>
  );
}
