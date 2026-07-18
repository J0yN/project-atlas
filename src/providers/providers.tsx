"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "./SearchProvider";
import { ThemeEngineProvider } from "./ThemeEngineProvider";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { PageTransition } from "@/components/ui/motion/PageTransition";
import { CustomCursor } from "@/components/ui/motion/CustomCursor";
import type { CommandPaletteMessages } from "@/i18n/messages";
import type { SearchResult } from "@/types/search";

export default function Providers({
  children,
  searchIndex,
  commandPalette
}: {
  children: React.ReactNode;
  searchIndex: readonly SearchResult[];
  commandPalette: CommandPaletteMessages;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ThemeEngineProvider>
        <SearchProvider>
          <PageTransition>{children}</PageTransition>
          <CommandPalette searchIndex={searchIndex} messages={commandPalette} />
          <CustomCursor />
        </SearchProvider>
      </ThemeEngineProvider>
    </ThemeProvider>
  );
}
