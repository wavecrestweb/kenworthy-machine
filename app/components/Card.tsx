import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import machinePhoto from "../../public/images/Ganesh-Cyclone-52-BY2.jpeg";
import label from "../../public/images/Polygon.svg";

const handleClick = () => {};

export default function Card() {
  return (
    <ChakraCard size="md" variant="front" align="center">
      <CardHeader>
        <Box position="relative">
          <Image src={machinePhoto} alt="Ganesh Cyclone 52-BY2"></Image>
          <Box
            color="black"
            borderLeft="5.3rem solid transparent"
            borderRight="0px solid transparent"
            borderTop="5.3rem solid #FAD50AD4"
            position="absolute"
            top="0"
            right="0"
            borderTopRightRadius="20px"
          >
            <Text
              textStyle="sm-p"
              fontWeight="bold"
              top="-4rem"
              right="0.5rem"
              transform="rotate(45deg)"
              position="absolute"
            >
              Lathe
            </Text>
          </Box>
        </Box>
      </CardHeader>
      <CardBody>
        <Text as="h5" textStyle="h5">
          Machine Name
        </Text>
      </CardBody>
      <CardFooter justifyContent="center" width="100%" borderBottomRadius="6px">
        <Button variant="mc-blue" onClick={handleClick}>
          View Details
        </Button>
      </CardFooter>
    </ChakraCard>
  );
}
