import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card";

export default function MachineCarousel() {
  return (
    <Box>
      <ContentWrapper>
        <Flex py="24" direction="column" alignItems="center">
          <Heading as="h2" textStyle="h1" pb="8">
            Our Machines
          </Heading>
          <Box pb="20">
            <Card></Card>
          </Box>
          <ChakraLink
            href="/view-machines"
            variant="primaryWhiteBg"
            size={{ base: "sm", sm: "xl" }}
          >
            View Machines
          </ChakraLink>
        </Flex>
      </ContentWrapper>
    </Box>
  );
}
