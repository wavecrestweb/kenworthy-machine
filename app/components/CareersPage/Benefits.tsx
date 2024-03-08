//LIBRARY IMPORTS
import { Box, Heading, Grid, GridItem, Flex, Card } from "@chakra-ui/react";
import Image from "next/image";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import ContentWrapper from "../ContentWrapper";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>>[number];
type Benefits = NonNullable<
  Extract<Block, { __typename: "PageCareersBlocksBenefits" }>
>;

export default function Benefits(props: Benefits): JSX.Element {
  return (
    <Box>
      <ContentWrapper>
        <Flex direction="column" alignItems="center">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
            lineHeight={{ base: "6", sm: "2.7rem", xl: "3rem" }}
            fontWeight="normal"
            layerStyle="whiteBg"
            pt={{ base: "20", xl: "28" }}
            pb={{ base: "16", xl: "28" }}
          >
            {props?.heading}
          </Heading>
          {props.benefits && (
            <Grid
              templateColumns={{ base: "1", xl: "repeat(3, 1fr)" }}
              gap={{ base: "16", xl: "28" }}
              pb={{ base: "20", xl: "36" }}
            >
              {props.benefits.map((benefit, i) => (
                <GridItem key={i}>
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="8"
                  >
                    <Card
                      w="8.75rem"
                      h="8.75rem"
                      align="center"
                      position="relative"
                    >
                      <Image
                        src={benefit?.icon || ""}
                        alt=""
                        fill={true}
                        style={{
                          objectFit: "contain",
                          padding: "1rem",
                        }}
                      />
                    </Card>
                    <Heading
                      as="h4"
                      fontSize={{ base: "lg", sm: "2xl" }}
                      lineHeight={{ base: "7", sm: "8" }}
                      fontWeight="bold"
                      textAlign="center"
                      layerStyle="whiteBg"
                    >
                      {benefit?.benefitTitle}
                    </Heading>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          )}
        </Flex>
      </ContentWrapper>
    </Box>
  );
}
