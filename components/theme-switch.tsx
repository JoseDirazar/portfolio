"use client";

import { useState, useEffect } from "react";
import SwitchThemeButton from "./switch-theme-button";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="fixed bottom-5 right-5 w-[3rem] h-[3rem] shadow-2xl flex items-center justify-center bg-neutral-100/50 backdrop-blur-sm dark:bg-neutral-800/50 rounded-full">
      <SwitchThemeButton
        resolvedTheme={resolvedTheme}
        setCurrentTheme={setTheme}
      />
    </div>
  );
}
