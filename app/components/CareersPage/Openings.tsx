//LIBRARY IMPORTS
import { Box, Heading, Flex, Card, Text, Link } from "@chakra-ui/react";
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
          <Card key={i} variant="position">
            <Flex direction="column">
              <Heading>{position?.title}</Heading>
              <Text>{position?.subtitle}</Text>
            </Flex>
            <Link
              color="brand.text"
              href={position?.jobDescriptionLink || ""}
              isExternal
              target="_blank"
            >
              {props.openingsList?.buttonText}
            </Link>
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
  console.log("openings", props);
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
