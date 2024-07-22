//LIBRARY IMPORTS
import {
  Heading,
  Flex,
  Card,
  Text,
  Link,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import ContentWrapper from "../ContentWrapper";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>>[number];
type OpeningsProps = NonNullable<
  Extract<Block, { __typename: "PageCareersBlocksOpenings" }>
>;

const subjectLine = "[Job title]%20Resume %20for%20future%20openings%20";
const emailLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}?subject=${subjectLine}`;

export default function Openings(props: OpeningsProps): JSX.Element {
  function OpeningsAvailable() {
    return (
      <Flex
        alignItems="center"
        direction="column"
        pt={{ base: "5rem", "2xl": "7rem" }}
        pb={{ base: "20", sm: "24", lg: "32", "2xl": "52" }}
      >
        <Heading
          as="h2"
          color="brand.text"
          fontFamily="body"
          fontSize={{ base: "2xl", sm: "3xl", "2xl": "5xl" }}
          fontWeight="normal"
          lineHeight={{ base: "6", sm: "2.7rem", xl: "3rem" }}
        >
          {props.openingsList?.heading}
        </Heading>
        <Flex
          direction="column"
          gap={{ base: "3rem", sm: "4rem", "2xl": "6rem" }}
          pt={{ base: "3rem", "2xl": "4rem" }}
          minW={{ base: "95vw" }}
        >
          {props.openingsList?.positions?.map((position, i) => (
            <Card
              key={i}
              width={"90%"}
              alignSelf={"center"}
              variant={{
                base: "position_sm",
                xl: "position_lg",
              }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <CardHeader>
                <Heading
                  color="brand.text"
                  fontSize={{ base: "lg", sm: "xl", xl: "2xl", "2xl": "4xl" }}
                  fontWeight={{ base: "bold", xl: "normal" }}
                  lineHeight={{ base: "6", sm: "2.7rem", "2xl": "3rem" }}
                >
                  {position?.title}
                </Heading>
                <Text
                  color="brand.text"
                  fontSize={{ base: "md", sm: "lg", "2xl": "2xl" }}
                  lineHeight={{ base: "6", sm: "7", "2xl": "10" }}
                  pt={{ base: "1.25rem", "2xl": "2rem" }}
                  pr={{ sm: "1rem" }}
                >
                  {position?.subtitle}
                </Text>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter
                p={{ base: "2.5rem 0 0 0", sm: "0" }}
                minW={{ base: "0%", md: "max-content" }}
                flex={{ base: "1 0 auto" }}
                justifyContent={{ base: "stretch", md: "end" }}
                alignItems={{ base: "center" }}
              >
                <Link
                  href={position?.jobDescriptionLink || ""}
                  isExternal
                  target="_blank"
                  variant="outline"
                  fontSize={{ base: "md", "2xl": "xl" }}
                  lineHeight={{ base: "5", "2xl": "7" }}
                  w={{ base: "90%", sm: "10%" }}
                  minW={{ base: "85vw", sm: "max-content" }}
                  p={{ base: "1rem 0rem", sm: "1rem 3.125rem" }}
                >
                  {props.openingsList?.buttonText}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Flex>
    );
  }

  function NoOpenings() {
    return (
      <Flex
        width={{ base: "85%" }}
        mx="auto"
        direction="column"
        alignItems="center"
        gap={{ base: "1rem", lg: "1.5rem", xl: "3rem" }}
        pt={{ base: "5rem", lg: "6rem", xl: "5rem", "2xl": "9rem" }}
        pb={{ base: "20", sm: "24", lg: "40" }}
      >
        <Heading
          as="h2"
          color="brand.secondary"
          fontSize={{ base: "2xl", sm: "xl", lg: "3xl" }}
          fontWeight={{ base: "bold", xl: "normal" }}
          lineHeight={{ base: "6", sm: "2.7rem", lg: "3rem" }}
          fontFamily="body"
        >
          {props.noOpenings?.heading}
        </Heading>
        <Text
          color="brand.text"
          fontSize={{ base: "xl", lg: "2xl", "2xl": "3xl" }}
          lineHeight={{ base: "6", sm: "9", "2xl": "10" }}
          textAlign="center"
          pb={{ base: "1.25rem" }}
        >
          {props.noOpenings?.description}
        </Text>
        <Link
          href={emailLink}
          isExternal
          target="_blank"
          variant="outline"
          fontSize={{ base: "md", sm: "lg" }}
          lineHeight={{ base: "6", sm: "7" }}
        >
          {props.noOpenings?.buttonText}
        </Link>
      </Flex>
    );
  }

  return (
    <ContentWrapper>
      {props?.openingsList?.positions?.length ? (
        <OpeningsAvailable />
      ) : (
        <NoOpenings />
      )}
    </ContentWrapper>
  );
}
