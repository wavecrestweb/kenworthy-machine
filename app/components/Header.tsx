"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Grid, Stack, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
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
          <Link
            href="/"
            color="white"
            fontSize="24px"
            _hover={{
              color: "var(--text-color-light)",
              borderBottom: "solid var(--primary-red) 2px",
              transitionDuration: "400ms",
            }}
          >
            Home
          </Link>
          <Link
            href="/request-quote"
            color="white"
            fontSize="24px"
            _hover={{
              color: "var(--text-color-light)",
              borderBottom: "solid var(--primary-red) 2px",
              transitionDuration: "400ms",
            }}
          >
            Request a Quote
          </Link>
          <div onClick={handleHamburger}>
            <Image
              src="/images/hamburger-menu.png"
              alt="Hamburger Menu"
              width={40}
              height={40}
            />
          </div>
        </Box>
        <Box></Box>
      </Grid>
      {hamburger && (
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap="24px"
          mx="12px"
          mb="12px"
          borderRadius="50%"
        >
          <Link
            href="/request-quote"
            color="white"
            backgroundColor="var(--primary-red)"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="6px"
            fontWeight="700"
            _hover={{
              color: "var(--text-color-light)",
              transitionDuration: "300ms",
            }}
          >
            Request a Quote
          </Link>
          <Link
            href="/view-machines"
            color="black"
            backgroundColor="white"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="6px"
            fontWeight="700"
            _hover={{
              color: "var(--text-color-light)",
              transitionDuration: "300ms",
            }}
          >
            View Machines
          </Link>
          <Link
            href="/about-us"
            color="black"
            backgroundColor="white"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="6px"
            fontWeight="700"
            _hover={{
              color: "var(--text-color-light)",
              transitionDuration: "300ms",
            }}
          >
            About Us
          </Link>
          <Link
            href="/careers"
            color="black"
            backgroundColor="white"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="6px"
            fontWeight="700"
            _hover={{
              color: "var(--text-color-light)",
              transitionDuration: "300ms",
            }}
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            color="black"
            backgroundColor="white"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="6px"
            fontWeight="700"
            _hover={{
              color: "var(--text-color-light)",
              transitionDuration: "300ms",
            }}
          >
            Contact Us
          </Link>
        </Grid>
      )}
    </Stack>
  );
}
