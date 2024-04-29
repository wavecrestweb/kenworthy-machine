import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { lato, roboto_slab } from "./fonts";
import "./global.css";
import { Providers } from "./providers";

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
    <html lang="en" className={`${lato.variable} ${roboto_slab.variable}`}>
      <body>
        <Providers>
          <Box zIndex={10} top="0" pos="sticky" width="100%">
            <Header />
          </Box>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
