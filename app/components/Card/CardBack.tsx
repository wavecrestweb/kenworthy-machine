import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  ListItem,
  Text,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { usePathname } from "next/navigation";

interface CardBackProps {
  animation: string;
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | null;
  description?: TinaMarkdownContent | TinaMarkdownContent[];
}

const CardBack: React.FC<CardBackProps> = ({
  animation,
  isFlipped,
  setIsFlipped,
  name,
  description,
}) => {
  const pathname = usePathname();

  const style =
    pathname === "/"
      ? responsiveValues.carousel
      : responsiveValues.machinesPage;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard animation={animation} variant={style.size}>
      <CardHeader>
        <Text
          as="h5"
          textStyle="h5"
          fontSize={style.header.fontSize}
          lineHeight={style.header.lineHeight}
          layerStyle="darkBg"
          textAlign="center"
        >
          {name}
        </Text>
      </CardHeader>
      <CardBody>
        {description && (
          <TinaMarkdown
            content={description}
            components={{
              ul: (props) => (
                <UnorderedList layerStyle="darkBg">
                  {props?.children}
                </UnorderedList>
              ),
              li: (props) => (
                <ListItem
                  textStyle="h5"
                  lineHeight={style.list.lineHeight}
                  fontSize={style.list.fontSize}
                  listStyleType="disc"
                >
                  {props?.children}
                </ListItem>
              ),
            }}
          />
        )}
      </CardBody>
      <CardFooter justifyContent="center">
        <Button
          variant="mc-white"
          fontSize={style.button}
          onClick={handleClick}
        >
          Return
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardBack;

const responsiveValues = {
  carousel: {
    size: { md: "back_md", "2xl": "back_lg" },
    header: {
      fontSize: { md: "md", "2xl": "xl" },
      lineHeight: { md: "6", "2xl": "7" },
    },
    list: {
      lineHeight: { md: "6", "2xl": "7" },
      fontSize: { md: "md", "2xl": "xl" },
    },
    button: { md: "md", "2xl": "2xl" },
  },
  machinesPage: {
    size: { md: "back_lg", "2xl": "back_xl" },
    header: {
      fontSize: { md: "xl", "2xl": "2xl" },
      lineHeight: { md: "6", "2xl": "7" },
    },
    list: {
      lineHeight: { md: "6", "2xl": "7" },
      fontSize: { md: "xl", "2xl": "2xl" },
    },
    button: { md: "2xl", "2xl": "3xl" },
  },
};
