"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-background-lift transition-colors flex items-center justify-center text-muted hover:text-foreground border border-transparent hover:border-border-color"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 stroke-[2.5]" />
      ) : (
        <Moon className="h-4 w-4 stroke-[2.5]" />
      )}
    </button>
  );
}
