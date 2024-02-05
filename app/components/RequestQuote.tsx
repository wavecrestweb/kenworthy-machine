// LIBRARY IMPORTS
import { Box, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaRegClipboard, FaRegEnvelope, FaRegHandshake } from "react-icons/fa6";
import Image from "next/image";

// LOCAL IMPORTS
import QuoteForm from "./QuoteForm";
import machineBackground from "../../public/images/machineBackground.png";

export default function RequestQuote() {
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
          <QuoteForm />
        </Box>
        <VStack flex="1" maxW={{ base: "auto", lg: "500px" }} spacing={4}>
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={6}>
            Send Us Your Request
          </Text>
          <HStack align="flex-start">
            <Icon as={FaRegClipboard} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <Text color="white" fontSize="xl">
                Complete the Inquiry Form
              </Text>
              <Text color="white">
                Fill out the quote form to let us know the details of your
                request, or any questions you have.
              </Text>
            </Box>
          </HStack>
          <Text color="white" fontSize="3xl">
            OR
          </Text>
          <HStack align="flex-start">
            <Icon as={FaRegEnvelope} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <Text color="white" fontSize="xl">
                Email Us Directly
              </Text>
              <Text color="white">
                If you would like to email us directly or send us attachments to
                complete your quote request, reach us at
                sales@kenworthymachine.com.
              </Text>
            </Box>
          </HStack>
          <HStack align="flex-start" mt={12}>
            <Icon as={FaRegHandshake} boxSize={8} color="brand.button" mr={2} />
            <Box>
              <Text color="white" fontSize="xl">
                Get a Quick Response
              </Text>
              <Text color="white">
                We will make sure you get a quick response from our team if you
                share your phone number and email with us.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
