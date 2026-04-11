"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveTheme = (t: Theme) => {
      if (t === "system") {
        return mediaQuery.matches ? "dark" : "light";
      }
      return t;
    };

    const applyTheme = (t: Theme) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      const currentResolved = resolveTheme(t);
      root.classList.add(currentResolved);
      setResolvedTheme(currentResolved);
      if (t !== "system") {
        localStorage.setItem("theme", t);
      } else {
        localStorage.removeItem("theme");
      }
    };

    applyTheme(theme);

    const listener = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
