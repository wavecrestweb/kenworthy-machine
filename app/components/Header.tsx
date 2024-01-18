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
              width={30}
              height={30}
            />
          </div>
        </Box>
        <Box></Box>
      </Grid>
      {hamburger && (
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap="12px"
          mx="12px"
          mb="12px"
          borderRadius="50%"
        >
          <Button
            colorScheme="red"
            size="md"
            borderRadius="20px"
            color="white"
            backgroundColor="var(--primary-red)"
          >
            Request a Quote
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            borderRadius="20px"
            color="black"
            backgroundColor="white"
          >
            View Machines
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            borderRadius="20px"
            backgroundColor="white"
          >
            About Us
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            borderRadius="20px"
            backgroundColor="white"
          >
            Careers
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            borderRadius="20px"
            backgroundColor="white"
          >
            Contact Us
          </Button>
        </Grid>
      )}
    </Stack>
  );
}
