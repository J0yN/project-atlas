"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "./SearchProvider";
import { ThemeEngineProvider } from "./ThemeEngineProvider";
import { CommandPalette } from "@/components/navigation/CommandPalette";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ThemeEngineProvider>
        <SearchProvider>
          {children}
          <CommandPalette />
        </SearchProvider>
      </ThemeEngineProvider>
    </ThemeProvider>
  );
}
