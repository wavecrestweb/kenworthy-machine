import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useState } from "react";
import { PageBlocksMachineCarouselMachineCard } from "@/tina/__generated__/types";

export default function Card(props: PageBlocksMachineCarouselMachineCard) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      {isFlipped ? (
        <CardBack isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      ) : (
        <CardFront isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      )}
    </>
  );
}
