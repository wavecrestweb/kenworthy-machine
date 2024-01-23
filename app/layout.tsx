import type { Metadata } from "next";
import { lato, roboto_slab } from "./fonts";
import { Providers } from "./providers";
import "./global.css";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";

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
        <Providers>
          <Box sx={{ position: "sticky", top: "0" }}>
            <Header />
          </Box>
          {children}
        </Providers>
      </body>
    </html>
  );
}
