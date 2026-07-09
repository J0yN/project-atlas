export const metadata = {
  title: "Project Atlas",
  description: "Project Atlas — foundation scaffold",
  viewport: "width=device-width, initial-scale=1"
};

import "@/styles/globals.css";
import Providers from "@/providers/providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
