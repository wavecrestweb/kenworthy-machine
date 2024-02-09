import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card";
import { PageBlocksMachineCarousel } from "@/tina/__generated__/types";

export default function MachineCarousel(props: PageBlocksMachineCarousel) {
  return (
    <Box>
      <ContentWrapper>
        <Flex py="24" direction="column" alignItems="center">
          <Heading as="h2" textStyle="h1" pb="8">
            {props.sectionTitle}
          </Heading>
          <Box pb="20">
            {props.machineCard?.map((card, i) => {
              return <Card key={i} {...card}></Card>;
            })}
          </Box>
          <ChakraLink
            href="/view-machines"
            variant="primaryWhiteBg"
            size={{ base: "sm", sm: "xl" }}
          >
            {props.buttonLabel}
          </ChakraLink>
        </Flex>
      </ContentWrapper>
    </Box>
  );
}
