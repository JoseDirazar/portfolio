"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SpaceInvaders() {
  const gameRef = useRef<HTMLIFrameElement>(null);
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">{t("spaceinvaders.title")}</h1>
      <p className="text-center text-xs opacity-50">
        {t("spaceinvaders.description")}
      </p>
      <p className="text-center text-sm">{t("spaceinvaders.instructions")}</p>
      <iframe
        ref={gameRef}
        src="/space-invaders/index.html"
        className="flex h-[530px] w-[530px] items-center justify-center rounded-md bg-white dark:bg-black"
      />
    </div>
  );
}
