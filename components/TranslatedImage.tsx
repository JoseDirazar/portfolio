"use client";

import Image from "next/image";
import { useTranslation } from "next-i18next";

interface TranslatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function TranslatedImage({
  src,
  alt,
  width,
  height,
  className,
}: TranslatedImageProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Si la imagen necesita ser traducida, podemos usar un patrón como:
  // /images/[lang]/image-name.png
  const translatedSrc = src.replace("/images/", `/images/${currentLang}/`);

  return (
    <Image
      src={translatedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
