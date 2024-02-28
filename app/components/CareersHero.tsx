// LIBRARY IMPORTS
import { Box, VStack, Heading, Center } from "@chakra-ui/react";
import Image from "next/image";
import { PageCareersBlocksHero } from "@/tina/__generated__/types";

// LOCAL IMPORTS
import ContentWrapper from "./ContentWrapper";

// HERO COMPONENT DEFINITION
export default function CareersHero(props: PageCareersBlocksHero): JSX.Element {
  return (
    <Box position="relative" minH="35vw">
      <Image
        src={props?.heroImage || ""}
        alt={""}
        placeholder="empty"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        bgImage={props?.heroImage || ""}
        h="100%"
        bg="rgba(11, 17, 62, 0.77)"
      >
        <ContentWrapper>
          <Center>
            <VStack spacing={12} py={48}>
              <Heading
                as="h3"
                fontSize="3xl"
                fontWeight="normal"
                color="brand.secondary"
              >
                {props?.title}
              </Heading>
              <Heading as="h1" textStyle="h1" fontWeight="normal" color="white">
                {props?.subtitle}
              </Heading>
            </VStack>
          </Center>
        </ContentWrapper>
      </Box>
    </Box>
  );
}
