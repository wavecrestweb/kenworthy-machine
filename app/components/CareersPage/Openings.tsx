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
            variant={{ base: "position_sm", "2xl": "position_md" }}
            w={{ base: "95vw", sm: "88vw", "2xl": "95vw" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <CardHeader>
              <Heading
                color="brand.text"
                fontSize={{ base: "lg", sm: "xl", "2xl": "3xl" }}
                fontWeight={{ "2xl": "normal" }}
                lineHeight={{ base: "5", sm: "6", "2xl": "10" }}
              >
                {position?.title}
              </Heading>
              <Text
                color="brand.text"
                fontSize={{ base: "md", sm: "lg", "2xl": "xl" }}
                lineHeight={{ base: "5", sm: "5", "2xl": "6" }}
                pt={{ base: "1.25rem", "2xl": "2rem" }}
              >
                {position?.subtitle}
              </Text>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter p={{ base: "2.5rem 0 0 0", sm: "0" }}>
              <Link
                color="brand.text"
                href={position?.jobDescriptionLink || ""}
                isExternal
                target="_blank"
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
    <Box>
      <ContentWrapper>
        <Flex direction="column" alignItems="center">
          <Heading>
            {props.isOpeningsListNotEmpty
              ? props.openingsList?.heading
              : props.noOpenings?.heading}
          </Heading>
          {props?.isOpeningsListNotEmpty ? (
            <OpeningsAvailable />
          ) : (
            <NoOpenings />
          )}
        </Flex>
      </ContentWrapper>
    </Box>
  );
}
