// LIBRARY IMPORTS
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { PageCareersBlocksWhyKm } from "@/tina/__generated__/types";
import ContentWrapper from "../ContentWrapper";

// LOCAL IMPORTS

// HERO COMPONENT DEFINITION
export default function WhyKM(props: PageCareersBlocksWhyKm): JSX.Element {
  return (
    <Box>
      <ContentWrapper>
        <Flex
          direction={{ sm: "column", xl: "row" }}
          px="2.5rem"
          py="3.8rem"
          gap={{ lg: "1rem", "2xl": "5rem" }}
          alignItems="center"
        >
          <Heading
            as="h2"
            color="brand.text"
            // fontSize={{ sm: "xl", xl: "3xl" }}
            fontSize={{ sm: "xl", lg: "3xl", "2xl": "5xl" }}
            lineHeight={{ sm: "6", lg: "10", "2xl": "3.6rem" }}
            fontWeight="normal"
            minWidth={{ lg: "40vw", xl: "7.5rem", "2xl": "30vw" }}
          >
            {props?.title}
          </Heading>
          <Text
            fontSize={{ sm: "lg", lg: "xl", "2xl": "2rem" }}
            lineHeight={{ sm: "5", lg: "6", "2xl": "2.4rem" }}
            color="brand.text"
          >
            {props?.description}
          </Text>
        </Flex>
      </ContentWrapper>
    </Box>
  );
}
