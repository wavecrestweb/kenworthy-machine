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
    <ChakraCard size="lg" variant="back" align="center" animation={animation}>
      <CardHeader>
        <Text as="h5" textStyle="h5" layerStyle="darkBg" textAlign="center">
          {name}
        </Text>
      </CardHeader>
      <CardBody>
        {description && (
          <TinaMarkdown
            content={description}
            components={{
              ul: ({ children }) => (
                <UnorderedList layerStyle="darkBg" lineHeight="6">
                  {children}
                </UnorderedList>
              ),
              li: ({ children }) => (
                <ListItem textStyle="h5" listStyleType="disc">
                  {children}
                </ListItem>
              ),
            }}
          />
        )}
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
