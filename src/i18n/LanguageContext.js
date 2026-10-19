import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import dictionary from "./id";

const STORAGE_KEY = "lang";
const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (s) => s });

const initialLang = () => {
  const q = new URLSearchParams(window.location.search).get("lang"); // ?lang=id|en for previews/screenshots
  if (q === "en" || q === "id") return q;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // t("English text") -> Indonesian when lang === "id" and a translation exists, otherwise the English text.
  const t = useCallback((text) => (lang === "id" && text && dictionary[text]) || text, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);
