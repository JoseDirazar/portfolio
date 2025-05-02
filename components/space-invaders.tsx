"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SpaceInvaders() {
  const gameRef = useRef<HTMLIFrameElement>(null);
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">{t("spaceinvaders.title")}</h1>
      <p className="text-xs opacity-50 text-center">
        {t("spaceinvaders.description")}
      </p>
      <p className="text-sm text-center">{t("spaceinvaders.instructions")}</p>
      <iframe
        ref={gameRef}
        src="/space-invaders/index.html"
        className="flex items-center justify-center rounded-md bg-white dark:bg-black w-[530px] h-[530px]"
      />
    </div>
  );
}
