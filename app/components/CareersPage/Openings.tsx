//LIBRARY IMPORTS
import { Box, Heading, Grid, GridItem, Flex, Card } from "@chakra-ui/react";
import Image from "next/image";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import ContentWrapper from "../ContentWrapper";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>>[number];
type OpeningsProps = NonNullable<
  Extract<Block, { __typename: "PageCareersBlocksOpenings" }>
>;

export default function Openings(props: OpeningsProps): JSX.Element {
  console.log("openings", props);
  return (
    <Box>
      <ContentWrapper>Openings</ContentWrapper>
    </Box>
  );
}
