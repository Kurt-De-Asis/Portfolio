"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-lg border border-violet-500/50 hover:bg-violet-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-violet-400" />
      ) : (
        <Moon size={18} className="text-violet-600" />
      )}
    </button>
  );
}
