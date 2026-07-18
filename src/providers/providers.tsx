"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "./SearchProvider";
import { CommandPalette } from "@/components/navigation/CommandPalette";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <SearchProvider>
        {children}
        <CommandPalette />
      </SearchProvider>
    </ThemeProvider>
  );
}
