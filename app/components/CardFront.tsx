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
import MachineTypeLabel from "./MachineTypeLabel";

interface CardFrontProps {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | null;
  image?: string | null;
  type?: string | null;
}

const CardFront: React.FC<CardFrontProps> = ({
  isFlipped,
  setIsFlipped,
  name,
  image,
  type,
}) => {
  // add a placeholder image and replace "default-image-url" with correct url
  const placeholderImage = "";

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard size="lg" variant="front" align="center">
      <CardHeader>
        <Box position="relative" w="sm" h="2xs" overflow="hidden">
          <Image
            src={image ?? placeholderImage}
            fill={true}
            style={{
              objectFit: "cover",
            }}
            alt={name ?? ""}
            placeholder="empty"
          />
          <MachineTypeLabel type={type} />
        </Box>
      </CardHeader>
      <CardBody>
        <Text as="h5" textStyle="h5" fontSize="2xl">
          {name}
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
