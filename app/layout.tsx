import type { Metadata } from "next";
import { lato, roboto_slab } from "./fonts";
import { Providers } from "./providers";
import "./global.css";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";

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
          <Box zIndex={10} top="0" pos="sticky">
            <Header />
          </Box>
          <Box maxW="1500px" mx="auto">
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
