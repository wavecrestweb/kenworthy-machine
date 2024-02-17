import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import chalkboard from "../../public/images/Chalkboard-User.svg";
import heart from "../../public/images/Heart-Pulse.svg";
import graph from "../../public/images/Upward-Graph.svg";
import SmallCard from "./SmallCard";

const cardData = [
  {
    header: "Job Training",
    body: "Our Team is invested in training and learning together.",
    image: chalkboard,
    alt: "Chalkboard",
    repositioned: false,
  },
  {
    header: "Benefits & Balance",
    body: "We believe employees work best when they are supported and encouraged to live fulfilling lives, not just while on the job.",
    image: heart,
    alt: "Heart with pulse",
    repositioned: false,
  },
  {
    header: "Career Growth",
    body: "CNC Machinists have specialized skills that allow them to evolve with new projects and advance machine technology.",
    image: graph,
    alt: "Graph with upward pointing arrow",
    repositioned: true,
  },
];

export default function Careers() {
  return (
    <Box w="100%" backgroundColor="white" py={8}>
      <Stack w="100%" bg="white" py="4rem" align={"center"}>
        <Heading
          fontSize={"48px"}
          color="brand.text"
          textAlign="center"
          mb={4}
          pb={2}
        >
          {"Join Our Team"}
        </Heading>
        <Box w={"50%"} pb={"3rem"}>
          <Text fontSize={"24px"} color={"brand.text"} align={"center"}>
            Whether you’re a beginner or a CNC expert, there are exciting
            opportunities for all experience levels at Kenworthy Machine.
          </Text>
        </Box>
        <SimpleGrid
          spacing={4}
          gap={200}
          templateColumns="repeat(3, 1fr)"
          mt={8}
        >
          <SmallCard {...cardData[0]} />
          <Box mx="auto">
            <Button variant="mc-red" w="250px">
              Apply Now
            </Button>
          </Box>
          <SmallCard {...cardData[1]} />
        </SimpleGrid>
        <SmallCard {...cardData[2]} />
      </Stack>
    </Box>
  );
}
