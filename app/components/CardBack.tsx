import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  ListItem,
  Text,
  UnorderedList,
  Box,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import machinePhoto from "../../public/images/Ganesh-Cyclone-52-BY2.jpeg";

interface CardBackProps {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardBack: React.FC<CardBackProps> = ({ isFlipped, setIsFlipped }) => {
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard size="lg" variant="back" align="center">
      <CardHeader>
        <Text as="h5" textStyle="h5" layerStyle="darkBg" pt="12">
          Machine Name
        </Text>
      </CardHeader>
      <CardBody>
        <UnorderedList layerStyle="darkBg">
          <ListItem textStyle="h5">List Item</ListItem>
        </UnorderedList>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button variant="mc-white" onClick={handleClick}>
          Return
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardBack;
