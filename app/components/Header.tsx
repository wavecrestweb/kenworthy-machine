"use client";

// LIBRARY IMPORTS
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Box, Grid, IconButton, Spacer, Stack } from "@chakra-ui/react";
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
    <Box backgroundColor="brand.backgroundDark">
      <Stack maxW="1728px" mx="auto">
        <Grid
          templateColumns={{
            base: "1fr 1fr 20px",
            sm: "1fr 1fr 100px",
            md: "500px 1fr 100px",
          }}
        >
          <Box>
            <Box
              px={"4rem"}
              py={"2rem"}
              w={{ base: "20rem", md: "28rem", xl: "32rem" }}
            >
              <Image src={logo} alt="Kenworthy Machine" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: "row-reverse", lg: "row" }}
            alignItems="center"
            justifyContent={{ base: "flex-start", lg: "flex-end" }}
            gap={{ base: "0", lg: "24px" }}
          >
            <ChakraLink
              href="/"
              borderBottom={
                pathname === "/" ? "solid var(--primary-red) 2px" : "none"
              }
              variant="navigation"
              visibility={{ base: "hidden", lg: "visible" }}
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
          <Spacer></Spacer>
        </Grid>
        {hamburger && (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "repeat(5, 1fr)",
            }}
            gap="24px"
            mx="12px"
            mb="12px"
            borderRadius="50%"
            maxW={{ base: "60%", md: "75%", lg: "100%" }}
          >
            <ChakraLink href="/request-quote" variant="buttonPrimaryDark">
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
    </Box>
  );
}
