"use client";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Box, Grid, Stack, IconButton, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  const pathname = usePathname();

  const handleHamburger = () => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <Stack>
      <Grid templateColumns={"500px 1fr 100px"}>
        <Box p="12px">
          <Image
            src="/images/kenworthy-logo.jpg"
            alt="Kenworthy Machine"
            width={500}
            height={500}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="24px"
        >
          <ChakraLink
            href="/"
            borderBottom={
              pathname === "/" ? "solid var(--primary-red) 2px" : "none"
            }
            variant="navigation"
          >
            Home
          </ChakraLink>

          <ChakraLink
            href="/request-quote"
            borderBottom={
              pathname === "/request-quote"
                ? "solid var(--primary-red) 2px"
                : "none"
            }
            variant="navigation"
          >
            Request a Quote
          </ChakraLink>

          <IconButton aria-label="Hamburger menu" onClick={handleHamburger}>
            <Image
              src="/images/hamburger-menu.png"
              alt="Hamburger Menu"
              width={40}
              height={40}
            />
          </IconButton>
        </Box>
        <Spacer></Spacer>
      </Grid>
      {hamburger && (
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap="24px"
          mx="12px"
          mb="12px"
          borderRadius="50%"
        >
          <ChakraLink href="/request-quote" variant="buttonPrimary">
            Request a Quote
          </ChakraLink>
          <ChakraLink href="/view-machines" variant="buttonSecondary">
            View Machines
          </ChakraLink>
          <ChakraLink href="/about-us" variant="buttonSecondary">
            About Us
          </ChakraLink>
          <ChakraLink href="/careers" variant="buttonSecondary">
            Careers
          </ChakraLink>
          <ChakraLink href="/request-quote" variant="buttonSecondary">
            Contact Us
          </ChakraLink>
        </Grid>
      )}
    </Stack>
  );
}
