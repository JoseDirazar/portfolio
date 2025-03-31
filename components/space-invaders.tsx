"use client";
import { useEffect, useRef } from "react";

export default function SpaceInvaders() {
  const gameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (gameRef.current) {
      gameRef.current.src = "../public/space-invaders/index.html"; // Si tienes un HTML
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-xs opacity-50 text-center">
        This game was ported into this page thanks to WASM!
      </p>
      <iframe
        src="/space-invaders/index.html"
        width="600px"
        height="600px"
        style={{ border: "none" }}
        className="flex items-center justify-center rounded-md bg-transparent dark:bg-transparent"
      />
    </div>
  );
}
