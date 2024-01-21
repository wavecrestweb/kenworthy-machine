"use client";

// LIBRARY IMPORTS
import { ChakraProvider } from "@chakra-ui/react";

// LOCAL IMPORTS
import customTheme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
