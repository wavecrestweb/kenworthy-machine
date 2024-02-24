//LIBRARY IMPORTS
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";
import { usePathname } from "next/navigation";

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
  ...props
}: {
  width?: number;
} & MachineCardsBlock): JSX.Element {
  const pathname = usePathname();
  const adjustedWidth = !width || width > 1728 ? 1728 * 0.9 : width * 0.9;

  return (
    <>
      {pathname === "/" &&
        props.__typename === "PageHomeBlocksMachineCarousel" && (
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
                <MachineCarousel machineCards={props?.machineCards} />
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
      {pathname === "/view-machines" &&
        props.__typename === "PageViewMachinesBlocksMachines" && (
          <Flex justifyContent="center">
            <ContentWrapper>
              <Heading
                as="h1"
                fontWeight="normal"
                layerStyle="whiteBg"
                pb={7}
                pt={12}
                textAlign="center"
                textStyle="h1"
              >
                {props.heading}
              </Heading>
              <Text
                textStyle="h5"
                color="brand.text"
                fontWeight="normal"
                textAlign="center"
                px={60}
                pb={9}
              >
                {props.description}
              </Text>
              <SimpleGrid
                columns={2}
                justifyItems="center"
                rowGap={14}
                px={52}
                pb={20}
              >
                {props?.machineCards?.machineCard?.map((card, i) => (
                  <Card key={i} {...card}></Card>
                ))}
              </SimpleGrid>
            </ContentWrapper>
          </Flex>
        )}
    </>
  );
}
