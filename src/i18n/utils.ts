import { ui, defaultLang } from "./ui";
import type { LocalizedString } from "../types";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang in ui ? (lang as keyof typeof ui) : defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    dynamicValue?: string | number,
  ): string {
    const translation = ui[lang][key] || ui[defaultLang][key];

    return dynamicValue === undefined
      ? translation
      : translation.replace(/\{[^}]+\}/, String(dynamicValue));
  };
}

export function getRouteWithLang(url: URL, targetLang: string) {
  const [, currentLang, ...rest] = url.pathname.split("/");
  const isCurrentLangValid = currentLang in ui;

  const path = isCurrentLangValid
    ? rest.join("/")
    : url.pathname === "/"
      ? ""
      : url.pathname.replace(/^\//, "");

  return `/${targetLang}/${path}`.replace(/\/$/, "");
}

export function resolveLocalizedString(
  value: LocalizedString | string | undefined,
  lang: string
): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value[defaultLang] || "";
}
