"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "./SearchProvider";
import { ThemeEngineProvider } from "./ThemeEngineProvider";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { PageTransition } from "@/components/ui/motion/PageTransition";
import { CustomCursor } from "@/components/ui/motion/CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ThemeEngineProvider>
        <SearchProvider>
          <PageTransition>{children}</PageTransition>
          <CommandPalette />
          <CustomCursor />
        </SearchProvider>
      </ThemeEngineProvider>
    </ThemeProvider>
  );
}

