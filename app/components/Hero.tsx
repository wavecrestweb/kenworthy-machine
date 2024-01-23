// LIBRARY IMPORTS
import { Box, Heading } from '@chakra-ui/react';
import Image from "next/image";

// LOCAL IMPORTS
import heroImage from '../../public/images/hero-photo.png';

// HERO COMPONENT DEFINITION
export default function Hero() {

  return (
    <Box position="relative" textAlign="center" bg="white">
      <Image
        src={heroImage}
        alt={"machines photo"}
        layout="responsive"
        width={1728}
        height={610}
        objectFit="cover"
        objectPosition="center"
      />
      <Box position="absolute" w="93%" top="100%" left="50%" transform="translate(-50%, -50%)">
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
