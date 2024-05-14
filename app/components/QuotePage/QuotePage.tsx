"use client";

// LIBRARY IMPORTS
import React, { useState } from "react";
import { Box, VStack, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";

// LOCAL IMPORTS
import QuotePageForm from "./QuotePageForm";
import HomeQuoteForm from "../HomePage/HomeQuoteForm";
import SuccessMessage from "./SuccessMessage";

// DEFINE TYPES
interface PageRequestQuoteBlocksQuotePageForm {
  formTitle: string;
  field1Placeholder: string;
  field2Placeholder: string;
  field3Placeholder: string;
  submitButtonText: string;
}

interface PageRequestQuoteBlocksQuotePageMessage {
  messageImage: string;
  messageTitle: string;
  messageBody: string;
}

interface PageQuery {
  page: {
    blocks: Array<
      | PageRequestQuoteBlocksQuotePageForm
      | PageRequestQuoteBlocksQuotePageMessage
    >;
  };
}

export default function RequestQuote(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  // SET STATES
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  // HOOKS
  const { data } = useTina(props);
  const handleCloseSuccess = () => {
    setSubmitSuccessful(false);
  };

  const quoteFormBlock = data.page.blocks?.find(
    (block) =>
      (block as any).__typename === "PageRequestQuoteBlocksQuotePageForm",
  ) as PageRequestQuoteBlocksQuotePageForm | undefined;
  const messageBlock = data.page.blocks?.find(
    (block) =>
      (block as any).__typename === "PageRequestQuoteBlocksQuotePageMessage",
  ) as PageRequestQuoteBlocksQuotePageMessage | undefined;

  const {
    formTitle = "",
    field1Placeholder = "",
    field2Placeholder = "",
    field3Placeholder = "",
    submitButtonText = "",
  } = quoteFormBlock || {};

  const messageTitle = messageBlock?.messageTitle;
  const messageBody = messageBlock?.messageBody;
  const messageImage = messageBlock?.messageImage;

  return (
    <Box position="relative">
      <Image
        src={messageImage || ""}
        alt=""
        placeholder="empty"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Stack
        px={{ base: 0, md: 10 }}
        py={20}
        spacing={16}
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        mx={{ base: 0, md: "auto" }}
        bgImage={messageImage || ""}
        bg="rgba(11, 17, 62, 0.79)"
      >
        <Box
          bg="white"
          flex="1"
          minW={{ base: "full", md: "500px" }}
          maxW={{ base: "full", lg: "500px" }}
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
        <VStack
          flex="1"
          maxW={{ base: "auto", lg: "500px" }}
          spacing={4}
          justifyContent="center"
        >
          <Text as="h3" fontSize="3xl" color="white" mb={6}>
            {messageTitle}
          </Text>
          <Text as="h2" fontSize="4xl" color="white" mb={6} textAlign="center">
            {messageBody}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}
