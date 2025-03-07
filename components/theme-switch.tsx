"use client";

import { useState, useEffect } from "react";
import SwitchThemeButton from "./switch-theme-button";

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 w-[3rem] h-[3rem] shadow-2xl flex items-center justify-center">
      <SwitchThemeButton />
    </div>
  );
}
