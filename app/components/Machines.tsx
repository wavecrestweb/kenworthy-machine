"use client";
import { Container } from "@chakra-ui/react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MachineCarousel from "./MachineCarousel";

export default function Machines({ width }) {
  const adjustedWidth = width * 0.97;
  return (
    <Container maxW={adjustedWidth} bg="white" color="black" py="5rem">
      <MachineCarousel />
    </Container>
  );
}
