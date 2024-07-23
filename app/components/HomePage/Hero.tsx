// LIBRARY IMPORTS
import { PageHomeBlocksHero } from "@/tina/__generated__/types";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

// LOCAL IMPORTS
import heroImage from "../../../public/images/hero-photo.png";

// HERO COMPONENT DEFINITION
export default function Hero(props: PageHomeBlocksHero) {
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
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <Box
        position="absolute"
        w="93%"
        left="50%"
        transform="translate(-50%, -50%)"
        height="10rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="brand.primary"
        opacity="90%"
      >
        <Heading fontSize={"48px"} size="xl" color="white">
          {props.heading}
        </Heading>
      </Box>
    </Box>
  );
}
