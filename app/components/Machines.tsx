import { Container, Heading, Box } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MachineCarousel from "./MachineCarousel";

export default function Machines({ width }: { width: number }) {
  const adjustedWidth = width * 0.95;
  return (
    <Container maxW={adjustedWidth} bg="white" py="4rem">
      <Heading color="black" textAlign="center" mb={4} pb={2}>
        {"Our Machines"}
      </Heading>
      <MachineCarousel />
      <Container maxW={"250px"} mt={20}>
        <ChakraLink href="/view-machines" variant="buttonPrimary">
          View Machines
        </ChakraLink>
      </Container>
    </Container>
  );
}
