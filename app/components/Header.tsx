"use client";

// LIBRARY IMPORTS
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Box, Grid, IconButton, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../../public/images/kenworthy-logo.jpg";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  const pathname = usePathname();

  const handleHamburger = () => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <Box backgroundColor="brand.primary" mx="auto" width="100%">
      <Stack>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginRight={{ base: "2rem", md: "4rem" }}
          minHeight={150}
        >
          <Box
            px={{ base: "2rem", md: "4rem" }}
            py={{ base: "1rem", md: "2rem" }}
            w={{ base: "20rem", md: "28rem", xl: "32rem" }}
            h={{ base: "10rem", md: "12rem", xl: "14rem" }}
          >
            <ChakraLink href="/">
              <Image src={logo} alt="Kenworthy Machine" />
            </ChakraLink>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ base: "12px", lg: "24px" }}
          >
            <ChakraLink
              href="/"
              borderBottom={
                pathname === "/" ? "solid var(--primary-red) 2px" : "none"
              }
              variant="navigation"
              visibility={{ base: "hidden", lg: "visible" }}
              width={{ base: "0", lg: "auto" }}
              height={{ base: "0", lg: "auto" }}
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
              visibility={{ base: "hidden", lg: "visible" }}
              width={{ base: "0", lg: "auto" }}
              height={{ base: "0", lg: "auto" }}
            >
              Request a Quote
            </ChakraLink>

            <IconButton
              aria-label="open navigation menu"
              onClick={handleHamburger}
              variant="ghost"
              color="white"
              fontSize="5xl"
              _hover={{
                background: "none",
                transform: "scale(1.1)",
                transition: "transform 0.2s ease-in-out",
              }}
              icon={hamburger ? <FaXmark /> : <FaBars />}
            />
          </Box>
        </Box>

        {hamburger && (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "repeat(4, 1fr)",
            }}
            gap="1.5rem"
            w={{ base: "80%", md: "90%", lg: "100%" }}
            mx={"auto"}
            px="2rem"
            mb={6}
            borderRadius="50%"
          >
            <ChakraLink
              href="/request-quote"
              variant="buttonPrimaryDark"
              onClick={handleHamburger}
            >
              Request a Quote
            </ChakraLink>
            <ChakraLink
              href="/view-machines"
              variant="buttonSecondary"
              onClick={handleHamburger}
            >
              View Machines
            </ChakraLink>
            <ChakraLink
              href="/careers"
              variant="buttonSecondary"
              onClick={handleHamburger}
            >
              Careers
            </ChakraLink>
            <ChakraLink
              href="/request-quote"
              variant="buttonSecondary"
              onClick={handleHamburger}
            >
              Contact Us
            </ChakraLink>
          </Grid>
        )}
      </Stack>
    </Box>
  );
}
