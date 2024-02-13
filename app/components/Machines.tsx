import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Container, Heading, Box, Flex } from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MachineCarousel from "./MachineCarousel";
import ContentWrapper from "./ContentWrapper";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>[number]>;

export type MachineCardsBlock = Extract<
  Block,
  { __typename: "PageBlocksMachineCarousel" }
>;

export default function Machines({
  width,
  ...props
}: { width: number } & MachineCardsBlock): JSX.Element {
  const adjustedWidth = width <= 1728 ? width * 0.9 : 1728 * 0.9;

  return (
    <Flex justifyContent="center">
      <ContentWrapper>
        <Container maxW={adjustedWidth} bg="white" py="4rem" px="0px" mx={8}>
          <Heading
            as="h2"
            textStyle="h1"
            fontWeight="normal"
            textAlign="center"
            mb={4}
            pb={2}
          >
            {props.sectionTitle}
          </Heading>
          <MachineCarousel machineCards={props?.machineCards} />
          <Flex mt={20} mb={8} justifyContent="center">
            <ChakraLink
              href="/view-machines"
              variant="buttonPrimaryLight"
              size={{ base: "sm", sm: "xl" }}
            >
              {props.buttonLabel}
            </ChakraLink>
          </Flex>
        </Container>
      </ContentWrapper>
    </Flex>
  );
}
