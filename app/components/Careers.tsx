import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import chalkboard from "../../public/images/Chalkboard-User.svg";
import heart from "../../public/images/Heart-Pulse.svg";
import graph from "../../public/images/Upward-Graph.svg";

export default function Careers({ width }: { width: number }) {
  return (
    <Box maxW={width} backgroundColor="white" py={8}>
      <Stack maxW={width} bg="white" py="4rem" align={"center"}>
        <Heading
          fontSize={"48px"}
          color="black"
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
          <Card
            w={"342px"}
            h={"336px"}
            color={"white"}
            backgroundColor={"brand.primary"}
            align={"center"}
            borderRadius={"1.875rem"}
          >
            <CardHeader>
              <Text fontSize="32px">Job Training</Text>
            </CardHeader>
            <Image src={chalkboard} width={100} alt="Chalkboard" />
            <CardBody>
              <Text fontSize="20px" align={"center"}>
                Our Team is invested in training and learning together.
              </Text>
            </CardBody>
          </Card>
          <Box mx="auto">
            <Button variant="mc-red" w="250px">
              Apply Now
            </Button>
          </Box>
          <Card
            w={"342px"}
            h={"336px"}
            color={"white"}
            backgroundColor={"brand.primary"}
            align={"center"}
            borderRadius={"1.875rem"}
          >
            <CardHeader>
              <Text fontSize="32px">Benefits & Balance</Text>
            </CardHeader>
            <Image src={heart} width={100} alt="Heart with pulse" />
            <CardBody>
              <Text fontSize="20px" align={"center"}>
                We believe employees work best when they are supported and
                encouraged to live fulfilling lives, not just while on the job.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Card
          w={"342px"}
          h={"336px"}
          color={"white"}
          backgroundColor={"brand.primary"}
          align={"center"}
          borderRadius={"1.875rem"}
          flexDir={"column"}
        >
          <CardHeader>
            <Text fontSize="32px">Career Growth</Text>
          </CardHeader>
          <Image
            src={graph}
            width={100}
            alt="Graph with upward pointing arrow"
          />
          <CardBody>
            <Text fontSize="20px" align={"center"}>
              CNC Machinists have specialized skills that allow them to evolve
              with new projects and advance machine technology.
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
