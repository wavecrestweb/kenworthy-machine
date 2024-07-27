import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface CardBackProps {
  animation: string;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | null;
  description?: TinaMarkdownContent | TinaMarkdownContent[];
  path: string;
}

export default function CardBack({
  animation,
  setIsFlipped,
  name,
  description,
  path,
}: CardBackProps): JSX.Element {
  const style =
    path === "/" ? responsiveValues.carousel : responsiveValues.machinesPage;

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
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
}

const responsiveValues = {
  carousel: {
    size: { base: "back_xs", sm: "back_sm", md: "back_md", "2xl": "back_lg" },
    header: {
      fontSize: { base: "md", "2xl": "xl" },
      lineHeight: { base: "6", "2xl": "7" },
    },
    list: {
      lineHeight: { base: "6", "2xl": "7" },
      fontSize: { base: "sm", md: "md", "2xl": "xl" },
    },
    button: { base: "md", "2xl": "2xl" },
  },
  machinesPage: {
    size: { base: "back_md", md: "back_lg" },
    header: {
      fontSize: { base: "md", md: "xl" },
      lineHeight: { base: "6", md: "7" },
    },
    list: {
      lineHeight: { base: "6", md: "7" },
      fontSize: { base: "md", md: "xl" },
    },
    button: { base: "md", md: "2xl" },
  },
};
