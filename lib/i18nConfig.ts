export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "es"],
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];

export const getOptions = (locale: string, namespaces: string[]) => ({
  supportedLngs: i18nConfig.locales,
  fallbackLng: i18nConfig.defaultLocale,
  lng: locale,
  fallbackNS: namespaces[0],
  defaultNS: namespaces[0],
  ns: namespaces,
});
