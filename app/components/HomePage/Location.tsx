import { Box, Text } from "@chakra-ui/react";
import { PageHomeBlocksLocation } from "@/tina/__generated__/types";
import ContentWrapper from "../ContentWrapper";

export default function Location(props: PageHomeBlocksLocation) {
  return (
    <Box bgColor="brand.backgroundMed">
      <ContentWrapper>
        <Text
          layerStyle="medBg"
          fontSize={{ base: "xl", xl: "3xl" }}
          fontWeight="bold"
          lineHeight={{ base: "7", xl: "10" }}
          p={{ base: "3.125rem 2.5rem", xl: "8rem 4.5rem" }}
          textAlign={"center"}
        >
          {props.location}
        </Text>
      </ContentWrapper>
    </Box>
  );
}
