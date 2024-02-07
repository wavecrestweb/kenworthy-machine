// LIBRARY IMPORTS
import { Box, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaRegClipboard, FaRegEnvelope, FaRegHandshake } from "react-icons/fa6";
import Image from "next/image";
import { PageBlocksQuoteSection } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// LOCAL IMPORTS
import QuoteForm from "./QuoteForm";
import machineBackground from "../../public/images/machineBackground.png";

export default function RequestQuote(props: PageBlocksQuoteSection) {
  console.log("copy: ", props.fillFormCopy);
  return (
    <Box position="relative">
      <Image
        src={machineBackground}
        alt=""
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <HStack
        px={10}
        py={20}
        spacing={16}
        justifyContent="space-around"
        mx="auto"
        bgImage={machineBackground}
        bg="rgba(11, 17, 62, 0.79)"
      >
        <Box
          bg="white"
          flex="1"
          minW={{ base: "auto", md: "500px" }}
          maxW={{ base: "auto", lg: "500px" }}
        >
          <QuoteForm {...props.requestQuoteForm} />
        </Box>
        <VStack flex="1" maxW={{ base: "auto", lg: "500px" }} spacing={4}>
          <Text as="h3" fontSize="3xl" fontWeight="bold" color="white" mb={6}>
            {props.requestCopyTitle}
          </Text>
          <HStack align="flex-start">
            <Icon as={FaRegClipboard} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <TinaMarkdown
                content={props.fillFormCopy}
                components={{
                  h5: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white" fontSize="xl">
                      {children}
                    </Text>
                  ),
                  p: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white">
                      {children}
                    </Text>
                  ),
                }}
              />
            </Box>
          </HStack>
          <Text color="white" fontSize="3xl">
            OR
          </Text>
          <HStack align="flex-start">
            <Icon as={FaRegEnvelope} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <TinaMarkdown
                content={props.emailCopy}
                components={{
                  h5: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white" fontSize="xl">
                      {children}
                    </Text>
                  ),
                  p: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white">
                      {children}
                    </Text>
                  ),
                }}
              />
            </Box>
          </HStack>
          <HStack align="flex-start" mt={12}>
            <Icon as={FaRegHandshake} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <TinaMarkdown
                content={props.responseCopy}
                components={{
                  h5: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white" fontSize="xl">
                      {children}
                    </Text>
                  ),
                  p: ({ children }: { children: ReactNode }) => (
                    <Text as="div" color="white" fontSize="lg">
                      {children}
                    </Text>
                  ),
                }}
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
