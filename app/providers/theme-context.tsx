"use client";
import { createContext, useState, useEffect, use } from "react";

type ThemeContextType = {
  theme: boolean;
  handleWitchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  handleWitchTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const storageTheme: string | null = localStorage.getItem("theme");
    const html = document.querySelector("html");

    if (storageTheme) html!.classList.add("dark");
    if (!storageTheme) localStorage.setItem("theme", "");
  }, []);

  const handleWitchTheme = () => {
    const html = document.querySelector("html");
    html!.classList.toggle("dark");

    if (html!.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "");
    }

    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleWitchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return use(ThemeContext);
}
