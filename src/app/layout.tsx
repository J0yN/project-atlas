import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import "@/styles/globals.css";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Project Atlas",
  description: "Project Atlas — foundation scaffold"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
