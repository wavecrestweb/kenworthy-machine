"use client";
import { Link } from "@chakra-ui/next-js";
import { Center, Box, Grid } from "@chakra-ui/react";
import Image from "next/image";

export default function Header() {
  return (
    <Grid templateColumns={"500px 1fr"}>
      <Box p="12px">
        <Image
          src="/images/kenworthy-logo.jpg"
          alt="Kenworthy Machine"
          width={500}
          height={500}
        />
      </Box>
      <Center gap="24px">
        <Link
          href="/"
          color="white"
          _hover={{ color: "var(--text-color-light)" }}
        >
          Home
        </Link>
        <Link
          href="/request-quote"
          color="white"
          _hover={{ color: "var(--text-color-light)" }}
        >
          Request a Quote
        </Link>
        <Image
          src="/images/hamburger-menu.png"
          alt="Hamburger Menu"
          width={30}
          height={30}
        />
      </Center>
    </Grid>
  );
}
