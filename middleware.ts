import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"]; // agrega 'es' si aún no lo habías hecho
const defaultLocale = "en"; // o el idioma por defecto que quieras

function getLocale(request: NextRequest) {
  // Detectar idioma preferido del navegador
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return defaultLocale;

  const preferredLanguages = acceptLang
    .split(",")
    .map((lang) => lang.split(";")[0].trim());

  // Buscar la primera coincidencia con nuestras locales soportadas
  for (const lang of preferredLanguages) {
    if (locales.includes(lang)) {
      return lang;
    }
    // Buscar solo el código base (por ejemplo 'es' de 'es-AR')
    const baseLang = lang.split("-")[0];
    if (locales.includes(baseLang)) {
      return baseLang;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar rutas internas (_next, api, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Verificar si la ruta ya tiene prefijo de idioma
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // Obtener el idioma y redirigir
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Aplicar el middleware solo a las rutas necesarias.
     * Evita rutas internas y estáticas.
     */
    "/((?!_next|api|static|favicon.ico|robots.txt).*)",
  ],
};
