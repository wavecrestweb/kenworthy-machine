// LIBRARY IMPORTS
import { PageBlocksHero } from "@/tina/__generated__/types";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

// LOCAL IMPORTS
import heroImage from "../../public/images/hero-photo.png";
import ContentWrapper from "./ContentWrapper";

// HERO COMPONENT DEFINITION
export default function Hero(props: PageBlocksHero) {
  return (
    <Box
      position="relative"
      textAlign="center"
      bg="white"
      minH="calc(38.25vw + 6rem)"
    >
      <ContentWrapper>
        <Image
          src={heroImage}
          alt={"various manufacturing machines in a shop"}
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
            {props.heading}
          </Heading>
        </Box>
      </ContentWrapper>
    </Box>
  );
}
