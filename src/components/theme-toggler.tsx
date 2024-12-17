"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </div>
  );
}
