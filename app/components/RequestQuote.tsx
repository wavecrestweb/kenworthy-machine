// LIBRARY IMPORTS
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

// LOCAL IMPORTS
import QuoteForm from "./QuoteForm";

export default function RequestQuote() {
  return (
    <HStack p={10} spacing={10} bg="rgba(11, 17, 62, 0.9)">
      <Box bg="white" w="full">
        <QuoteForm />
      </Box>
      <VStack spacing={4}>
        <Text fontSize="lg" fontWeight="bold" color="white">
          Send Us Your Request
        </Text>
        <Text color="white">Complete the Inquiry Form</Text>
        <Text color="white">
          Fill out the quote form to let us know the details of your request, or
          any questions you have.
        </Text>
        <Text color="white">OR</Text>
        <Text color="white">Email Us Directly</Text>
        <Text color="white">
          If you would like to email us directly or send us attachments to
          complete your quote request, reach us at sales@kenworthymachine.com.
        </Text>
        <Text color="white">Get a Quick Response</Text>
        <Text color="white">
          We will make sure you get a quick response from our team if you share
          your phone number and email with us.
        </Text>
      </VStack>
    </HStack>
  );
}
