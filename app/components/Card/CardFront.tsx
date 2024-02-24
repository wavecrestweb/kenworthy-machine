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
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const style =
    pathname === "/"
      ? responsiveValues.carousel
      : responsiveValues.machinesPage;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard variant={style.size} align="center" animation={animation}>
      <CardHeader>
        <Box
          position="relative"
          w={style.header.w}
          h={style.header.h}
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
          <MachineTypeLabel type={type} />
        </Box>
      </CardHeader>
      <CardBody>
        <Text as="h5" textStyle="h5" fontSize={style.text} textAlign="center">
          {name}
        </Text>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button variant="mc-blue" fontSize={style.button} onClick={handleClick}>
          View Details
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardFront;

const responsiveValues = {
  carousel: {
    size: {
      md: "front_md",
      "2xl": "front_lg",
    },
    header: {
      w: {
        md: "14rem",
        "2xl": "20rem",
      },
      h: {
        md: "9rem",
        "2xl": "13rem",
      },
    },
    text: { md: "md", "2xl": "2xl" },
    button: { md: "md", "2xl": "2xl" },
  },
  machinesPage: {
    size: {
      md: "front_lg",
      "2xl": "front_xl",
    },
    header: {
      w: {
        md: "20rem",
        "2xl": "24rem",
      },
      h: {
        md: "13rem",
        "2xl": "16rem",
      },
    },
    text: { md: "2xl", "2xl": "3xl" },
    button: { md: "2xl", "2xl": "3xl" },
  },
};
