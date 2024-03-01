// LIBRARY IMPORTS
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { PageCareersBlocksHero } from "@/tina/__generated__/types";

// LOCAL IMPORTS
import ContentWrapper from "./ContentWrapper";

// HERO COMPONENT DEFINITION
export default function CareersHero(props: PageCareersBlocksHero): JSX.Element {
  return (
    <Box
      position="relative"
      minH={{ base: "25vh", md: "30vh", lg: "40vh", xl: "52vh" }}
    >
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
          <Flex
            direction="column"
            alignItems="center"
            pt={{ base: "7vh", md: "9vh", lg: "13vh", xl: "18vh" }}
            gap={{ base: "1vh", md: "2vh", xl: "3vh" }}
          >
            <Heading
              as="h3"
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight={{ base: "bold", lg: "normal" }}
              color="brand.secondary"
            >
              {props?.title}
            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: "xl", sm: "3xl" }}
              fontWeight="normal"
              color="white"
            >
              {props?.subtitle}
            </Heading>
          </Flex>
        </ContentWrapper>
      </Box>
    </Box>
  );
}
