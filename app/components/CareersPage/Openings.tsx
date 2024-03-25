//LIBRARY IMPORTS
import {
  Box,
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
      <Flex direction="column" gap="1rem">
        {props.openingsList?.positions?.map((position, i) => (
          <Card
            key={i}
            variant={{
              base: "position_sm",
              "2xl": "position_lg",
            }}
            maxW={{ base: "95vw", md: "88vw", "2xl": "95vw" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <CardHeader>
              <Heading
                color="brand.text"
                fontSize={{ base: "2xl", sm: "2rem", "2xl": "5xl" }}
                fontWeight={{ base: "bold", xl: "normal" }}
                lineHeight={{ base: "7", sm: "10", "2xl": "3.6rem" }}
              >
                {position?.title}
              </Heading>
              <Text
                color="brand.text"
                fontSize={{ base: "xl", sm: "2xl", "2xl": "2rem" }}
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
            >
              <Link
                href={position?.jobDescriptionLink || ""}
                isExternal
                target="_blank"
                variant="outline"
                fontSize={{ base: "xl", "2xl": "2xl" }}
                lineHeight={{ base: "6", "2xl": "7" }}
                minW={{ base: "85vw", sm: "100%" }}
                maxW={{ base: "0%" }}
                p={{ base: "1rem 0rem", sm: "1rem 3.125rem" }}
              >
                {props.openingsList?.buttonText}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    );
  }

  function NoOpenings() {
    return (
      <>
        <Text textAlign="center">{props.noOpenings?.description}</Text>
        <Link href={emailLink} isExternal target="_blank" color="brand.text">
          {props.noOpenings?.buttonText}
        </Link>
      </>
    );
  }

  return (
    <ContentWrapper>
      <Flex direction="column" alignItems="center">
        <Heading>
          {props.isOpeningsListNotEmpty
            ? props.openingsList?.heading
            : props.noOpenings?.heading}
        </Heading>
        {props?.isOpeningsListNotEmpty ? <OpeningsAvailable /> : <NoOpenings />}
      </Flex>
    </ContentWrapper>
  );
}
