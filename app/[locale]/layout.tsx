import { Inter } from "next/font/google";

import { dir } from "i18next";
import i18nConfig from "@/i18nConfig";
import initTranslations from "../i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
