
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    
    // Apply initial theme
    updateTheme(prefersDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    updateTheme(newIsDark);
  };

  const updateTheme = (dark: boolean) => {
    // This is just a placeholder for actual theme implementation
    // In a real implementation, you would update CSS variables or use a theme provider
    console.log("Theme switched to", dark ? "dark" : "light");
    
    // For demonstration purposes, we'll just log that the theme has changed
    // In a full implementation, you would update root CSS variables here
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun size={18} className="text-foreground" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </button>
  );
}
