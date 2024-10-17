"use client";

// LIBRARY IMPORTS
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useTina } from "tinacms/dist/react";

// LOCAL IMPORTS
import gearBackground from "../../../public/images/machine-gear-background.png";
import Footer from "../Footer";
import HomeQuoteForm from "../HomePage/HomeQuoteForm";
import SuccessMessage from "./SuccessMessage";

// DEFINE TYPES
interface PageRequestQuoteBlocksQuotePageForm {
  __typename: "PageRequestQuoteBlocksQuotePageForm";
  formTitle: string;
  field1Placeholder: string;
  field2Placeholder: string;
  field3Placeholder: string;
  submitButtonText: string;
}

interface PageRequestQuoteBlocksQuotePageMessage {
  __typename: "PageRequestQuoteBlocksQuotePageMessage";
  messageTitle: string;
  messageBody: string;
}

interface QuotePageProps {
  data: any;
  variables: {
    relativePath: string;
  };
  query: string;
  errors?: { message: string }[];
  path?: string[];
}

export default function QuotePage(props: QuotePageProps): JSX.Element {
  // SET STATES
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // HOOKS
  const { data } = useTina(props);

  const handleCloseSuccess = () => {
    setSubmitSuccessful(false);
    setButtonDisabled(false);
  };

  const quoteFormBlock: PageRequestQuoteBlocksQuotePageForm | undefined =
    data.page.blocks?.find(
      (
        block:
          | PageRequestQuoteBlocksQuotePageForm
          | PageRequestQuoteBlocksQuotePageMessage,
      ) => block.__typename === "PageRequestQuoteBlocksQuotePageForm",
    ) as PageRequestQuoteBlocksQuotePageForm;
  const messageBlock: PageRequestQuoteBlocksQuotePageMessage | undefined =
    data.page.blocks?.find(
      (
        block:
          | PageRequestQuoteBlocksQuotePageForm
          | PageRequestQuoteBlocksQuotePageMessage,
      ) => block.__typename === "PageRequestQuoteBlocksQuotePageMessage",
    ) as PageRequestQuoteBlocksQuotePageMessage;

  const {
    formTitle = "",
    field1Placeholder = "",
    field2Placeholder = "",
    field3Placeholder = "",
    submitButtonText = "",
  } = quoteFormBlock || {};

  const messageTitle = messageBlock?.messageTitle;
  const messageBody = messageBlock?.messageBody;

  return (
    <Box position="relative">
      <Image
        src={gearBackground}
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
        px={{ base: 0, lg: 10 }}
        py={{ base: 0, lg: 20 }}
        spacing={16}
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        mx={{ base: 0, md: "auto" }}
        bgImage={gearBackground.src}
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
            <HomeQuoteForm
              formTitle={formTitle}
              field1Placeholder={field1Placeholder}
              field2Placeholder={field2Placeholder}
              field3Placeholder={field3Placeholder}
              submitButtonText={submitButtonText}
              setSubmitSuccessful={setSubmitSuccessful}
              buttonDisabled={buttonDisabled}
              setButtonDisabled={setButtonDisabled}
            />
          )}
        </Box>
        <VStack
          flex="1"
          maxW={{ base: "auto", lg: "500px" }}
          spacing={4}
          pb={{ base: 4, lg: 0 }}
          justifyContent="center"
        >
          <Text as="h3" fontSize="3xl" color="white" mb={6}>
            {messageTitle}
          </Text>
          <Text
            as="h2"
            fontSize="4xl"
            color="white"
            mb={6}
            textAlign="center"
            px={{ base: 10, md: 0 }}
          >
            {messageBody}
          </Text>
        </VStack>
      </Stack>
      <Footer
        logo={data.footer.logo}
        navLinks={data.footer.navLinks}
        contactInfo={data.footer.contactInfo}
      />
    </Box>
  );
}
