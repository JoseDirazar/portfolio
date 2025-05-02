"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTranslatedData } from "@/lib/data";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation();
  const { links } = getTranslatedData(t);
  const [currentHash, setCurrentHash] = useState<string>("");

  // 🔍 Leer el hash actual en el cliente
  const handleHashChange = () => {
    setCurrentHash(window.location.hash || "#home"); // default fallback
  };
  useEffect(() => {
    handleHashChange(); // inicializar
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [window.location.hash, setCurrentHash]);

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-gray-950/75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="fixed top-[0.15rem] left-1/2 flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex h-3/4 w-fit items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => setCurrentHash(link.hash)}
                className={`text-ellipse mx-3 my-3 flex w-16 items-center justify-center text-center transition ${
                  currentHash === link.hash
                    ? "text-gray-900 dark:text-gray-200"
                    : "hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
