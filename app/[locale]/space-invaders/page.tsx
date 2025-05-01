import SpaceInvaders from "@/components/space-invaders";
import { SiBevy, SiRust } from "react-icons/si";
import { BiSolidInvader } from "react-icons/bi";
import TranslationsProvider from "@/components/TranslationsProvider";
import { i18nNamespaces } from "@/lib/data";
import initTranslations from "@/app/i18n";

export default async function SpaceInvadersPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
