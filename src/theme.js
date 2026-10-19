import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const read = () => document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

// The initial attribute is set by an inline script in public/index.html (no flash on load).
export const useTheme = () => {
  const [theme, setThemeState] = useState(read);

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f7f6f2" : "#09090a");
  }, [theme]);

  const setTheme = useCallback((next) => {
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => setTheme(read() === "light" ? "dark" : "light"), [setTheme]);
  return { theme, setTheme, toggle };
};
