"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    // Sincronizar el idioma con i18n
    i18n.changeLanguage(language);
    // Refrescar la página para aplicar los cambios
    router.refresh();
  }, [language, i18n, router]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
