"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-white"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span>
          {LANGUAGES.find((lang) => lang.code === i18n.language)?.name ||
            "English"}
        </span>
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`ring-opacity-5 absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black dark:bg-gray-800 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`block w-full px-4 py-2 text-left text-sm ${
                i18n.language === language.code
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
              role="menuitem"
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
