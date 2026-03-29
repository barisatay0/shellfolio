import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    dynamicValue?: string | number,
  ): string {
    let translation: string = ui[lang][key] || ui[defaultLang][key];
    if (dynamicValue !== undefined) {
      translation = translation.replace(/\{[^}]+\}/, String(dynamicValue));
    }
    return translation;
  };
}

export function getRouteWithLang(url: URL, targetLang: string) {
  const [, currentLang, ...rest] = url.pathname.split("/");
  if (currentLang in ui) {
    return `/${targetLang}/${rest.join("/")}`.replace(/\/$/, "");
  }
  const path = url.pathname === "/" ? "" : url.pathname;
  return `/${targetLang}${path}`;
}
