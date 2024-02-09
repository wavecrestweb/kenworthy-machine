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
import MachineTypeLabel from "./MachineTypeLabel";

interface CardFrontProps {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardFront: React.FC<CardFrontProps> = ({ isFlipped, setIsFlipped }) => {
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard size="lg" variant="front" align="center">
      <CardHeader>
        <Box position="relative">
          <Image src={machinePhoto} alt="Ganesh Cyclone 52-BY2"></Image>
          <MachineTypeLabel />
        </Box>
      </CardHeader>
      <CardBody>
        <Text as="h5" textStyle="h5">
          Machine Name
        </Text>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button variant="mc-blue" onClick={handleClick}>
          View Details
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardFront;
