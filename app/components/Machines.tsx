//LIBRARY IMPORTS
import { Link as ChakraLink } from "@chakra-ui/next-js";
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//LOCAL IMPORTS
import MachineCarousel from "./MachineCarousel";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card/Card";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>>[number];

export type MachineCardsBlock = Extract<
  Block,
  | { __typename: "PageHomeBlocksMachineCarousel" }
  | { __typename: "PageViewMachinesBlocksMachines" }
>;

export default function Machines({
  width,
  path,
  ...props
}: {
  width?: number;
  path: string;
} & MachineCardsBlock): JSX.Element {
  const adjustedWidth = !width || width > 1728 ? 1728 * 0.9 : width * 0.9;

  return (
    <>
      {path === "/" && props.__typename === "PageHomeBlocksMachineCarousel" && (
        <Flex justifyContent="center">
          <ContentWrapper>
            <Container
              maxW={adjustedWidth}
              bg="white"
              py="3rem"
              px="0px"
              mx={8}
            >
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
              <MachineCarousel machineCards={props?.machineCards} path={path} />
              <Flex mt={16} mb={4} justifyContent="center">
                <ChakraLink
                  href="/view-machines"
                  variant="buttonPrimaryLight"
                  p={{ base: "0.375rem 2.5rem", sm: "0.5rem 4rem" }}
                  lineHeight="6"
                  fontSize={{ base: "md", md: "xl" }}
                >
                  {props.buttonLabel}
                </ChakraLink>
              </Flex>
            </Container>
          </ContentWrapper>
        </Flex>
      )}
      {path === "/view-machines" &&
        props.__typename === "PageViewMachinesBlocksMachines" && (
          <Flex justifyContent="center">
            <ContentWrapper>
              <Stack px={{ sm: "10", xl: "32" }}>
                <Heading
                  as="h1"
                  fontWeight="normal"
                  layerStyle="whiteBg"
                  pb={{
                    base: "6",
                    sm: "8",
                    xl: "12",
                  }}
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
                  px={{
                    base: "8",
                    xl: "52",
                  }}
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
