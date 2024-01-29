// LIBRARY IMPORTS
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

// LOCAL IMPORTS
import heroImage from "../../public/images/hero-photo.png";

// HERO COMPONENT DEFINITION
export default function Hero() {
  return (
    <Box
      position="relative"
      textAlign="center"
      bg="white"
      minH="calc(38.25vw + 6rem)"
    >
      <Image
        src={heroImage}
        alt={"various manufacturing machines in a shop"}
        width={1728}
        height={610}
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        position="absolute"
        w="93%"
        left="50%"
        transform="translate(-50%, -50%)"
        height="6rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="brand.backgroundDark"
        opacity="90%"
      >
        <Heading size="xl" color="white">
          Machining Services
        </Heading>
      </Box>
    </Box>
  );
}
