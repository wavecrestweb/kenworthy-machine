//LIBRARY IMPORTS
import { Box, Heading, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";

type Block = NonNullable<NonNullable<PageQuery["page"]["blocks"]>>[number];
type Benefits = NonNullable<
  Extract<Block, { __typename: "PageCareersBlocksBenefits" }>
>;

export default function Benefits(props: Benefits): JSX.Element {
  return (
    <Box>
      <ContentWrapper>
        <Heading>{props?.heading}</Heading>
        <SimpleGrid columns={{ base: 1, xl: 3 }}>
          <Box>
            {props.benefits && (
              <>
                {props.benefits.map((benefit, i) => (
                  <>
                    <Image
                      src={benefit?.icon || ""}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <Heading>{benefit?.benefitTitle}</Heading>
                  </>
                ))}
              </>
            )}
          </Box>
        </SimpleGrid>
      </ContentWrapper>
    </Box>
  );
}
