"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
      {resolvedTheme === "light" ? (
      <button
        className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-black border-opacity-40 bg-black text-white antialiased shadow-2xl backdrop-blur-[0.5rem] transition-all sm:hover:scale-[1.15] active:scale-110 dark:bg-white"
        onClick={() => setTheme("dark")}
      >
          <BsMoon className="rounded-full bg-black text-xl font-bold text-white" />
      </button>
        ) : (
          <button
        className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-black border-opacity-40 bg-black text-white antialiased shadow-2xl backdrop-blur-[0.5rem] transition-all sm:hover:scale-[1.15] active:scale-110 dark:bg-white"
        onClick={() => setTheme("light")}
      >
          <BsSun className="text-xl dark:bg-white dark:text-black" />
          </button>
        )}
    </div>
  );
}