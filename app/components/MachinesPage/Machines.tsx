//LIBRARY IMPORTS
import { PageQuery } from "@/tina/__generated__/types";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

//LOCAL IMPORTS
import Card from "../Card/Card";
import ContentWrapper from "../ContentWrapper";
import MachineCarousel from "../HomePage/MachineCarousel";

export type Block = NonNullable<
  NonNullable<PageQuery["page"]["blocks"]>
>[number];

export type MachineCardsBlock = Extract<
  Block,
  | { __typename: "PageHomeBlocksMachineCarousel" }
  | { __typename: "PageViewMachinesBlocksMachines" }
>;

export default function Machines({
  path,
  ...props
}: {
  path: string;
} & MachineCardsBlock): JSX.Element {
  return (
    <>
      {path === "/" && props.__typename === "PageHomeBlocksMachineCarousel" && (
        <Flex justifyContent="center">
          <ContentWrapper>
            <Box
              bg="white"
              width={"90%"}
              mx={"auto"}
              maxW={{ base: "250px", md: "600px", lg: "950px", xl: "1200px" }}
            >
              <Heading
                as="h2"
                textStyle="h1"
                fontWeight="600"
                textAlign="center"
                mt={20}
                py={2}
              >
                {props.sectionTitle}
              </Heading>

              <MachineCarousel machineCards={props?.machineCards} path={path} />

              <Flex mt={16} mb={12} justifyContent="center">
                <ChakraLink
                  href="/view-machines"
                  variant="buttonPrimaryLight"
                  p={{ base: "0.375rem 2.5rem", sm: "0.5rem 4rem" }}
                  lineHeight="6"
                  mb={20}
                  fontSize={{ base: "md", md: "xl" }}
                >
                  {props.buttonLabel}
                </ChakraLink>
              </Flex>
            </Box>
          </ContentWrapper>
        </Flex>
      )}
      {path === "/view-machines" &&
        props.__typename === "PageViewMachinesBlocksMachines" && (
          <Flex justifyContent="center">
            <ContentWrapper>
              <Stack px={{ sm: "10", xl: "28", "2xl": "32" }}>
                <Heading
                  as="h1"
                  fontWeight="normal"
                  layerStyle="whiteBg"
                  pb={{ base: "6", sm: "8", xl: "12" }}
                  pt={{ base: "12", sm: "14", lg: "16", xl: "20" }}
                  textAlign="center"
                  textStyle="h1"
                >
                  {props.heading}
                </Heading>
                <Text
                  textStyle="h5"
                  color="brand.text"
                  fontWeight={{ base: "bold", sm: "normal" }}
                  lineHeight={{ base: "6", sm: "8", xl: "9" }}
                  fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
                  textAlign="center"
                  px={{ base: "8", xl: "30", "2xl": "52" }}
                  pb={{ base: "5", sm: "12", lg: "9", xl: "16" }}
                >
                  {props.description}
                </Text>
                <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  justifyItems="center"
                  rowGap={{ base: "9", sm: "7", lg: "10" }}
                  px={{ xl: "30", "2xl": "40" }}
                  pb={{ base: "16", sm: "20" }}
                >
                  {props?.machineCards?.machineCard?.map((card, i) => (
                    <Card key={i} {...card} path={path}></Card>
                  ))}
                </SimpleGrid>
              </Stack>
            </ContentWrapper>
          </Flex>
        )}
    </>
  );
}
