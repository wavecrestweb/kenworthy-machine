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
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ChakraCard
      animation={animation}
      variant={{ md: "back_md", "2xl": "back_lg" }}
    >
      <CardHeader>
        <Text
          as="h5"
          textStyle="h5"
          fontSize={{ md: "md", "2xl": "xl" }}
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
                  lineHeight={{ md: "6", "2xl": "7" }}
                  fontSize={{ md: "md", "2xl": "xl" }}
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
          fontSize={{ md: "md", "2xl": "2xl" }}
          onClick={handleClick}
        >
          Return
        </Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default CardBack;
