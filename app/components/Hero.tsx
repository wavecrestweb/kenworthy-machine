// LIBRARY IMPORTS
import { Box, Heading } from '@chakra-ui/react';
import Image from "next/image";

// LOCAL IMPORTS


// HERO COMPONENT DEFINITION
export default function Hero() {

  return (
    <Box position="relative" textAlign="center" bg="white">
      <Image
        src={"/image/hero-photo.png"}
        alt={"machines photo"}
        layout="responsive"
        width={1728}
        height={610}
        objectFit="cover"
        objectPosition="center"
      />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Heading
          as="h1"
          size="2xl"
          color="white"
        >
          Machining Services
        </Heading>
      </Box>
    </Box>
  );
};
