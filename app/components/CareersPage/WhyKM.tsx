// LIBRARY IMPORTS
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { PageCareersBlocksWhyKm } from "@/tina/__generated__/types";

// LOCAL IMPORTS
import ContentWrapper from "../ContentWrapper";

// HERO COMPONENT DEFINITION
export default function WhyKM(props: PageCareersBlocksWhyKm): JSX.Element {
  return (
    <Box>
      <ContentWrapper>
        <Grid
          alignItems="center"
          gap={{ base: "1rem", lg: "1.25rem", xl: "0" }}
          px={{ base: "3rem", lg: "5rem", xl: "7rem" }}
          pt={{ base: "5rem", lg: "6rem", xl: "3.8rem" }}
          templateColumns={{ base: "1fr", lg: "30% 8% 62%" }}
        >
          <GridItem>
            <Heading
              as="h2"
              color="brand.text"
              fontFamily="body"
              fontSize={{ base: "3xl", sm: "3xl", "2xl": "5xl" }}
              fontWeight={{ base: "bold", lg: "normal" }}
              lineHeight={{ base: "7", sm: "10", "2xl": "3.75rem" }}
              textAlign={{ base: "center", lg: "start" }}
            >
              {props?.title}
            </Heading>
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <Text
              color="brand.text"
              fontSize={{ base: "xl", sm: "2xl", "2xl": "3xl" }}
              lineHeight={{ base: "6", sm: "7", "2xl": "2.4rem" }}
              textAlign={{ base: "center", lg: "start" }}
            >
              {props?.description}
            </Text>
          </GridItem>
        </Grid>
      </ContentWrapper>
    </Box>
  );
}
