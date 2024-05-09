// LIBRARY IMPORTS
import { Box, Flex, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { FaRegClipboard, FaRegEnvelope, FaRegHandshake } from "react-icons/fa6";
import Image from "next/image";
import { PageHomeBlocksQuoteSection } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// LOCAL IMPORTS
import HomeQuoteForm from "./HomeQuoteForm";
import SuccessMessage from "./SuccessMessage";
import machineBackground from "../../../public/images/machineBackground.png";

export default function RequestQuote(props: PageHomeBlocksQuoteSection) {
  // SET STATES
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const handleCloseSuccess = () => {
    setSubmitSuccessful(false);
  };

  const {
    formTitle = "",
    field1Placeholder = "",
    field2Placeholder = "",
    field3Placeholder = "",
    submitButtonText = "",
  } = props.requestQuoteForm || {};

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
      <Box
        display="flex"
        flexDirection={{ base: "column-reverse", lg: "row" }}
        gap="4rem"
        px={{ base: 12, md: 24, lg: 10 }}
        py={20}
        justifyContent="space-around"
        mx="auto"
        bgImage={machineBackground.src}
        bg="rgba(11, 17, 62, 0.79)"
      >
        <Flex></Flex>
        <Box
          bg="white"
          flex="1"
          minW={{ base: "auto", md: "500px" }}
          maxW={{ base: "auto", lg: "500px" }}
        >
          {submitSuccessful ? (
            <SuccessMessage handleCloseSuccess={handleCloseSuccess} />
          ) : (
            <HomeQuoteForm
              formTitle={formTitle}
              field1Placeholder={field1Placeholder}
              field2Placeholder={field2Placeholder}
              field3Placeholder={field3Placeholder}
              submitButtonText={submitButtonText}
              setSubmitSuccessful={setSubmitSuccessful}
            />
          )}
        </Box>
        <VStack flex="1" maxW={{ base: "auto", lg: "500px" }} spacing={4}>
          <Text as="h3" fontSize="3xl" fontWeight="bold" color="white" mb={6}>
            {props.requestCopyTitle}
          </Text>
          <HStack align="flex-start">
            <Icon
              as={FaRegClipboard}
              boxSize={8}
              color="brand.secondary"
              mr={2}
            />
            <Box>
              <TinaMarkdown
                content={props.fillFormCopy}
                components={{
                  h5: (props) => (
                    <Text as="div" color="white" fontSize="xl" pb="0.5rem">
                      {props?.children}
                    </Text>
                  ),
                  p: (props) => (
                    <Text as="div" color="white" fontSize="lg" lineHeight="5">
                      {props?.children}
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
            <Icon
              as={FaRegEnvelope}
              boxSize={8}
              color="brand.secondary"
              mr={2}
            />
            <Box>
              <TinaMarkdown
                content={props.emailCopy}
                components={{
                  h5: (props) => (
                    <Text as="div" color="white" fontSize="xl" pb="0.5rem">
                      {props?.children}
                    </Text>
                  ),
                  p: (props) => (
                    <Text as="div" color="white" fontSize="lg" lineHeight="5">
                      {props?.children}
                    </Text>
                  ),
                }}
              />
            </Box>
          </HStack>
          <HStack align="flex-start" mt={12}>
            <Icon
              as={FaRegHandshake}
              boxSize={8}
              color="brand.secondary"
              mr={2}
            />
            <Box>
              <TinaMarkdown
                content={props.responseCopy}
                components={{
                  h5: (props) => (
                    <Text as="div" color="white" fontSize="xl" pb="0.5rem">
                      {props?.children}
                    </Text>
                  ),
                  p: (props) => (
                    <Text as="div" color="white" fontSize="lg" lineHeight="5">
                      {props?.children}
                    </Text>
                  ),
                }}
              />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
