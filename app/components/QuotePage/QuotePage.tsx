// LIBRARY IMPORTS
import { Box, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { PageHomeBlocksQuoteSection } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// LOCAL IMPORTS
import QuotePageForm from "./QuotePageForm";
import SuccessMessage from "./SuccessMessage";
import gearBackgroundLong from "../../../public/images/gearBackgroundLong.png";

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
        src={gearBackgroundLong}
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
        bgImage={gearBackgroundLong.src}
        bg="rgba(11, 17, 62, 0.79)"
      >
        <Box
          bg="white"
          flex="1"
          minW={{ base: "auto", md: "500px" }}
          maxW={{ base: "auto", lg: "500px" }}
        >
          {submitSuccessful ? (
            <SuccessMessage handleCloseSuccess={handleCloseSuccess} />
          ) : (
            <QuotePageForm
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
        </VStack>
      </HStack>
    </Box>
  );
}
