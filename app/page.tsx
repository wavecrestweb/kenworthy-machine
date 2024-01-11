"use client";
import { Link } from "@chakra-ui/next-js";
import { Center, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <h1>Kentworthy Machine</h1>
      <Center>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Home
        </Link>
        <Link href="/request" color="blue.400" _hover={{ color: "blue.500" }}>
          Request a Quote
        </Link>
      </Center>
    </Box>
  );
}
