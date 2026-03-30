"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, translations } from "./i18n";

type TranslationType = (typeof translations)[Locale];

interface LocaleContextType {
  locale: Locale;
  t: TranslationType;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : prev === "en" ? "pt" : "es"));
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, t: translations[locale], toggleLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
