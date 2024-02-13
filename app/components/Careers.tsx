import {
  Container,
  Heading,
  Box,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import chalkboard from "../../public/images/chalkboard-user-solid2.svg";

export default function Careers({ width }: { width: number }) {
  const adjustedWidth = width * 0.9;
  return (
    <Box maxW={width} backgroundColor="white" py={8}>
      <Container maxW={adjustedWidth} bg="white" py="4rem">
        <Heading color="black" textAlign="center" mb={4} pb={2}>
          {"Join Our Team"}
        </Heading>
        <Text fontSize={"sm"} color={"brand.text"} align={"center"}>
          Whether you’re a beginner or a CNC expert, there are exciting
          opportunities for all experience levels at Kenworthy Machine.
        </Text>
        <SimpleGrid
          spacing={4}
          templateColumns="342px 1fr 342px"
          justifyContent="center"
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
            <Image src={chalkboard} width={170} alt="Chalkboard" />
            <CardBody>
              <Text fontSize="20px" align={"center"}>
                Our Team is invested in training and learning together.
              </Text>
            </CardBody>
          </Card>
          <Box mx="auto">
            <Button variant="mc-red">Apply Now</Button>
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
              <Text fontSize="32px">Job Training</Text>
            </CardHeader>
            <Image src={chalkboard} width={170} alt="Chalkboard" />
            <CardBody>
              <Text fontSize="20px" align={"center"}>
                Our Team is invested in training and learning together.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
