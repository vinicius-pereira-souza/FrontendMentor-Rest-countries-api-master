"use client";

import { ThemeContextProvider } from "@/app/providers/theme-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
