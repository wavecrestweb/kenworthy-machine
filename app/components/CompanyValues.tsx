// LIBRARY IMPORTS
import { ReactNode } from "react";
import { PageBlocksValues } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaRegClock, FaPeopleGroup, FaRegStar } from "react-icons/fa6";

// LOCAL IMPORTS
import gearBackground from "../../public/images/machine-gear-background.png";
import ContentWrapper from "./ContentWrapper";

// VALUES COMPONENT DEFINITION
export default function CompanyValues(props: PageBlocksValues) {
  return (
    <Box position="relative">
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
      <Box bgImage={gearBackground} p={10} bg="rgba(11, 17, 62, 0.9)">
        <ContentWrapper>
          <VStack spacing={8}>
            <Heading color="white" textAlign="center" mb={4}>
              {"Kenworthy's Values"}
            </Heading>
            <VStack
              maxW="1400px"
              bg="white"
              borderRadius="2xl"
              px={32}
              py={24}
              spacing={36}
            >
              {/* QUALITY VALUE CONTAINER */}
              <HStack spacing={12} align="center">
                <VStack align="start" spacing={4}>
                  <Heading size="lg">{props.quality1?.title}</Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality1?.description}
                    components={{
                      p: ({ children }: { children: ReactNode }) => (
                        <Text as="span" fontSize="xl" color="brand.text">
                          {children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
                <Flex
                  p={4}
                  bg="brand.backgroundDark"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaRegStar} boxSize={24} color="white" />
                </Flex>
              </HStack>
              {/* ON-TIME VALUE CONTAINER */}
              <HStack spacing={12} align="center">
                <Flex
                  p={4}
                  bg="brand.backgroundDark"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaRegClock} boxSize={24} color="white" />
                </Flex>
                <VStack align="start" spacing={4}>
                  <Heading size="lg">{props.quality2?.title}</Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality2?.description}
                    components={{
                      p: ({ children }: { children: ReactNode }) => (
                        <Text as="span" fontSize="xl" color="brand.text">
                          {children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
              </HStack>
              {/* COLLABORATION VALUE CONTAINER */}
              <HStack spacing={12} align="center">
                <VStack align="start" spacing={4}>
                  <Heading size="lg">{props.quality3?.title}</Heading>
                  <Box
                    bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                    w="full"
                    h={1}
                  ></Box>
                  <TinaMarkdown
                    content={props.quality3?.description}
                    components={{
                      p: ({ children }: { children: ReactNode }) => (
                        <Text as="span" fontSize="xl" color="brand.text">
                          {children}
                        </Text>
                      ),
                    }}
                  />
                </VStack>
                <Flex
                  p={4}
                  bg="brand.backgroundDark"
                  borderRadius="2xl"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaPeopleGroup} boxSize={24} color="white" />
                </Flex>
              </HStack>
            </VStack>
          </VStack>
        </ContentWrapper>
      </Box>
    </Box>
  );
}
