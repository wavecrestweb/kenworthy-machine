import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Heading,
} from "@chakra-ui/react";

const handleClick = () => {};

export default function Card() {
  return (
    <ChakraCard size="lg" variant="front" align="center">
      <CardHeader>
        <Box>Photo and Label</Box>
      </CardHeader>
      <CardBody>
        <Heading>Machine Name</Heading>
      </CardBody>
      <CardFooter>
        <Button variant="mc-blue" onClick={handleClick}>
          View Details
        </Button>
      </CardFooter>
    </ChakraCard>
  );
}
