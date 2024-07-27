import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import MachineTypeLabel from "./MachineTypeLabel";

interface CardFrontProps {
  animation: string;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | null;
  image?: string | null;
  type?: string | null;
  path: string;
}

export default function CardFront({
  animation,
  setIsFlipped,
  name,
  image,
  type,
  path,
}: CardFrontProps): JSX.Element {
  const placeholderImage = "/machine-gear-background.png";

  const style =
    path === "/" ? responsiveValues.carousel : responsiveValues.machinesPage;

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
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
            object-fit="cover"
            sizes={style.img_sizes}
            alt={name ?? ""}
            placeholder="empty"
          />
          <MachineTypeLabel type={type} path={path} />
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
}

const responsiveValues = {
  carousel: {
    img_sizes:
      "(max-width: 480px) 10rem, (max-width: 768px) 12rem, (max-width: 1536px) 14rem, 20rem",
    size: {
      base: "front_xs",
      sm: "front_sm",
      md: "front_md",
      "2xl": "front_lg",
    },
    header: {
      w: { base: "10rem", sm: "12rem", md: "14rem", "2xl": "20rem" },
      h: { base: "7.5rem", sm: "8rem", md: "9rem", "2xl": "13rem" },
    },
    text: { base: "sm", md: "md", "2xl": "2xl" },
    button: { base: "md", "2xl": "2xl" },
  },
  machinesPage: {
    img_sizes: "(max-width: 768px) 14rem, 20rem",
    size: { base: "front_md", md: "front_lg" },
    header: {
      w: { base: "14rem", md: "20rem" },
      h: { base: "9rem", md: "13rem" },
    },
    text: { base: "md", md: "2xl" },
    button: { base: "md", md: "2xl" },
  },
};
