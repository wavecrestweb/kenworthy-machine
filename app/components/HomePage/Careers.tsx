import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import chalkboard from "../../../public/images/Chalkboard-User.svg";
import heart from "../../../public/images/Heart-Pulse.svg";
import graph from "../../../public/images/Upward-Graph.svg";
import SmallCard from "../SmallCard";
import { PageHomeBlocksCareerSection } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Tina } from "tinacms";

export default function Careers(props: PageHomeBlocksCareerSection) {
  const cardData = [
    {
      header: props.card1?.title,
      body: props.card1?.card1Description,
      image: chalkboard,
      alt: "Chalkboard",
      repositioned: false,
    },
    {
      header: props.card2?.title,
      body: props.card2?.card2Description,
      image: heart,
      alt: "Heart with pulse",
      repositioned: false,
    },
    {
      header: props.card3?.title,
      body: props.card3?.card3Description,
      image: graph,
      alt: "Graph with upward pointing arrow",
      repositioned: true,
    },
  ];

  return (
    <Box w="100%" backgroundColor="white" py={8}>
      <Stack w="100%" bg="white" py="4rem" align="center" mx="auto">
        <Heading
          fontSize={"48px"}
          color="brand.text"
          textAlign="center"
          mb={4}
          pb={2}
        >
          {props.heading}
        </Heading>
        <Box w={"50%"} pb={"3rem"}>
          <TinaMarkdown
            content={props.careerDescription}
            components={{
              h3: (props) => (
                <h3
                  style={{
                    fontSize: "24px",
                    color: "brand.text",
                    textAlign: "center",
                  }}
                  {...props}
                />
              ),
            }}
          />
        </Box>
        <Box mx="auto">
          <Button
            variant="mc-red"
            w="250px"
            position={{ base: "static", lg: "relative" }}
            top={{ base: "0", lg: "85" }}
          >
            {props.buttonLabel}
          </Button>
        </Box>
        {/* <SimpleGrid
          spacing={{ base: 12, lg: 4 }}
          gap={{ base: 19, lg: 200 }}
          justifyContent={"flex-start"}
          templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
          mt={8}
          mx="auto"
          px={{ base: 4, lg: 12 }}
        >
          <SmallCard {...cardData[0]} />
          <Spacer />
          <SmallCard {...cardData[1]} />
        </SimpleGrid>
        <Box mt={{ base: 31, lg: 0 }}>
          <SmallCard {...cardData[2]} />
        </Box> */}
      </Stack>
    </Box>
  );
}
