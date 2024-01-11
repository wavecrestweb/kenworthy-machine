import type { Metadata } from "next";
import { lexend_deca } from "./fonts";
import { Providers } from "./providers";
import "./global.css";

export const metadata: Metadata = {
  title: "Kentworthy Machine",
  description: "The website of Kentworthy Machine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend_deca.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
