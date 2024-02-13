import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Container, Heading, Box } from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MachineCarousel from "./MachineCarousel";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>[number]>;

export type MachineCardsBlock = Extract<
  Block,
  { __typename: "PageBlocksMachineCarousel" }
>;
export default function Machines({
  width,
  ...props
}: { width: number } & MachineCardsBlock): JSX.Element {
  const adjustedWidth = width * 0.9;

  return (
    <Box maxW={width} backgroundColor="white">
      <Container maxW={adjustedWidth} bg="white" py="4rem">
        <Heading as="h2" textStyle="h1" textAlign="center" mb={4} pb={2}>
          {props.sectionTitle}
        </Heading>
        <MachineCarousel machineCards={props?.machineCards} />
        <Container maxW={"250px"} mt={20}>
          <ChakraLink
            href="/view-machines"
            variant="buttonPrimaryLight"
            size={{ base: "sm", sm: "xl" }}
          >
            {props.buttonLabel}
          </ChakraLink>
        </Container>
      </Container>
    </Box>
  );
}
