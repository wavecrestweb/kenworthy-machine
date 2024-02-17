import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spacer,
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
      <Stack w="100%" bg="white" py="4rem" align="center" mx="auto">
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
        <Box mx="auto">
          <Button
            variant="mc-red"
            w="250px"
            position={{ base: "static", md: "relative" }}
            top={{ base: "0", md: "85" }}
          >
            Apply Now
          </Button>
        </Box>
        <SimpleGrid
          spacing={{ base: 12, md: 4 }}
          gap={{ base: 19, md: 200 }}
          justifyContent={"flex-start"}
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          mt={8}
          mx="auto"
        >
          <SmallCard {...cardData[0]} />
          <Spacer />
          <SmallCard {...cardData[1]} />
        </SimpleGrid>
        <Box mt={{ base: 31, md: 0 }}>
          <SmallCard {...cardData[2]} />
        </Box>
      </Stack>
    </Box>
  );
}
