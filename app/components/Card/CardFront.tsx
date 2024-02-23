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
  animation: string;
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | null;
  image?: string | null;
  type?: string | null;
}

const CardFront: React.FC<CardFrontProps> = ({
  animation,
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
    <ChakraCard
      variant={{ md: "front_md", "2xl": "front_lg" }}
      align="center"
      animation={animation}
    >
      <CardHeader>
        <Box
          position="relative"
          w={{ md: "14rem", "2xl": "20rem" }}
          h={{ md: "9rem", "2xl": "13rem" }}
          overflow="hidden"
        >
          <Image
            src={image ?? placeholderImage}
            fill={true}
            style={{
              objectFit: "cover",
            }}
            alt={name ?? ""}
            placeholder="empty"
          />
          {/* <MachineTypeLabel type={type} /> */}
        </Box>
      </CardHeader>
      <CardBody>
        <Text
          as="h5"
          textStyle="h5"
          fontSize={{ md: "md", "2xl": "2xl" }}
          textAlign="center"
        >
          {name}
        </Text>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button
          variant="mc-blue"
          fontSize={{ md: "md", "2xl": "2xl" }}
          onClick={handleClick}
        >
          View Details
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardFront;
