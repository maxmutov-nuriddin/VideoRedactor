import { useSettingsStore } from "../stores/settings-store";
import { translations } from "./translations";
import type { AppLanguage, LanguageOption, TranslationDictionary } from "./types";

export * from "./types";
export * from "./translations";

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "uz", label: "O'zbekcha", nativeLabel: "O'zbekcha", flag: "🇺🇿", shortLabel: "UZ" },
  { code: "ru", label: "Русский", nativeLabel: "Русский", flag: "🇷🇺", shortLabel: "RU" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧", shortLabel: "EN" },
];

export function normalizeLanguage(lang?: string | null): AppLanguage {
  if (!lang) return "en";
  const lower = lang.toLowerCase().trim();
  if (lower.startsWith("uz")) return "uz";
  if (lower.startsWith("ru")) return "ru";
  return "en";
}

export function getDictionary(lang?: string | null): TranslationDictionary {
  const code = normalizeLanguage(lang);
  return translations[code] || translations.en;
}

export function useTranslation() {
  const language = useSettingsStore((state) => state.language);
  const setLanguageStore = useSettingsStore((state) => state.setLanguage);

  const currentLanguage = normalizeLanguage(language);
  const dict = translations[currentLanguage] || translations.en;

  const setLanguage = (lang: AppLanguage) => {
    setLanguageStore(lang);
  };

  return {
    t: dict,
    currentLanguage,
    setLanguage,
    languages: SUPPORTED_LANGUAGES,
  };
}
