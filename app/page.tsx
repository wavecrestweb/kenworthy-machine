"use client";
import { Link } from "@chakra-ui/next-js";
import { Center, Box, Grid } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
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
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Home
        </Link>
        <Link href="/request" color="blue.400" _hover={{ color: "blue.500" }}>
          Request a Quote
        </Link>
        <Image
          src="/images/hamburger-menu.png"
          alt="Hamburger Menu"
          width={20}
          height={20}
        />
      </Center>
    </Grid>
  );
}
