"use client";

import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

function I18nProvider({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(I18nProvider);
