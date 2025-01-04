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

  useEffect(() => {}, []);

  const handleWitchTheme = () => {
    setTheme((prevState) => !prevState);

    const html = document.querySelector("html");
    html!.classList.toggle("dark");
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
