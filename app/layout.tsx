import type { Metadata } from "next";
import { lato, roboto_slab } from "./fonts";
import { Providers } from "./providers";
import "./global.css";

export const metadata: Metadata = {
  title: "Kenworthy Machine",
  description: "The website of Kenworthy Machine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
