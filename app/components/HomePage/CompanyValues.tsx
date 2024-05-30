// LIBRARY IMPORTS
import { PageHomeBlocksValues } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaRegClock, FaPeopleGroup, FaRegStar } from "react-icons/fa6";

// LOCAL IMPORTS
import gearBackground from "../../../public/images/machine-gear-background.png";
import ContentWrapper from "../ContentWrapper";

// VALUES COMPONENT DEFINITION
export default function CompanyValues(props: PageHomeBlocksValues) {
  return (
    <Box position="relative" overflow="hidden">
      <Image
        src={gearBackground}
        alt=""
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box bgImage={gearBackground.src} p={10} bg="rgba(11, 17, 62, 0.79)">
        <ContentWrapper>
          <VStack spacing={8}>
            <Heading fontSize={"48px"} color="white" textAlign="center" mb={4}>
              {"Kenworthy's Values"}
            </Heading>
            <VStack
              maxW="1400px"
              bg="white"
              borderRadius="2xl"
              px={{ base: 8, md: 16, lg: 32 }}
              py={{ base: 16, md: 24 }}
              spacing={{ base: 8, md: 24, lg: 36 }}
            >
              {/* QUALITY VALUE CONTAINER */}
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={12}
                align="center"
              >
                <VStack
                  align={{ base: "center", md: "start" }}
                  spacing={4}
                  order={{ base: 2, md: 0 }}
                >
                  <Heading size="lg" color="brand.text">
                    {props.quality1?.title}
                  </Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality1?.description}
                    components={{
                      p: (props) => (
                        <Text as="div" fontSize="xl" color="brand.text">
                          {props?.children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
                <Flex
                  p={4}
                  bg="brand.primary"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                  order={{ base: 1, md: 0 }}
                >
                  <Icon as={FaRegStar} boxSize={24} color="white" />
                </Flex>
              </Stack>
              {/* ON-TIME VALUE CONTAINER */}
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={12}
                align="center"
              >
                <Flex
                  p={4}
                  mt={{ base: 8 }}
                  bg="brand.primary"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaRegClock} boxSize={24} color="white" />
                </Flex>
                <VStack align={{ base: "center", md: "start" }} spacing={4}>
                  <Heading size="lg" color="brand.text">
                    {props.quality2?.title}
                  </Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality2?.description}
                    components={{
                      p: (props) => (
                        <Text as="span" fontSize="xl" color="brand.text">
                          {props?.children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
              </Stack>
              {/* COLLABORATION VALUE CONTAINER */}
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={12}
                align="center"
              >
                <VStack
                  align={{ base: "center", md: "start" }}
                  spacing={4}
                  order={{ base: 2, md: 0 }}
                >
                  <Heading size="lg" color="brand.text">
                    {props.quality3?.title}
                  </Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality3?.description}
                    components={{
                      p: (props) => (
                        <Text as="span" fontSize="xl" color="brand.text">
                          {props?.children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
                <Flex
                  p={4}
                  mt={{ base: 8 }}
                  bg="brand.primary"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                  order={{ base: 1, md: 0 }}
                >
                  <Icon as={FaPeopleGroup} boxSize={24} color="white" />
                </Flex>
              </Stack>
            </VStack>
          </VStack>
        </ContentWrapper>
      </Box>
    </Box>
  );
}
