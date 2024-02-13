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
          templateColumns="repeat(3, minmax(200px, 342px))"
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
              <Heading size="md"> Job Training</Heading>
            </CardHeader>
            <Image src={chalkboard} width={170} alt="Chalkboard" />
            <CardBody>
              <Text align={"center"}>
                Our Team is invested in training and learning together.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
