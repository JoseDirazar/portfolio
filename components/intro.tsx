"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BiggerLogo } from "@/public/BiggerLogo";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/1695416361331.jpg"
              alt="Jose portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-44 w-44 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute right-2 bottom-4 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{t("hero.greeting")}</span> {t("hero.role")}{" "}
        {t("hero.status")}. {t("hero.recent")}{" "}
        <Link
          href="https://www.biggertech.co/"
          target="_blank"
          className="inline-block"
        >
          <BiggerLogo theme={resolvedTheme} />
        </Link>
        , {t("hero.building")} <span className="italic">{t("hero.sites")}</span>
        . {t("hero.focus")}{" "}
        <span className="underline">{t("hero.mobile")}</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex gap-4">
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition outline-none hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            {t("navigation.contact")}{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <a
            className="group borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 transition outline-none hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/jose-dirazar-cv.pdf"
            download
          >
            CV{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>
        </div>
        <div className="flex gap-4">
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/jose-dirazar-a6b927236/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/JoseDirazar"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
