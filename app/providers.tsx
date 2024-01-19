"use client";

import { ChakraProvider } from "@chakra-ui/react";
import buttonTheme from "./lib/buttonVariants";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={buttonTheme}>{children}</ChakraProvider>;
}
