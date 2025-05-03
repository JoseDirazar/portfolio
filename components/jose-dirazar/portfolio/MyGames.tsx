"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function MyGames() {
  const { t } = useTranslation();
  const pathName = usePathname();
  const [_, locale] = pathName.split("/");
  return (
    <section className="h-20">
      <Link
        href={`/${locale}/jose-dirazar/my-games`}
        className="rounded-md bg-secondary px-6 py-4"
      >
        {t("games.link")}
      </Link>
    </section>
  );
}
