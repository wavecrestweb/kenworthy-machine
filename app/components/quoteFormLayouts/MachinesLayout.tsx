// LIBRARY IMPORTS
import {
  Box,
  Button,
  chakra,
  FormControl,
  HStack,
  Input,
  Textarea,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

// LOCAL IMPORTS
import { useSendQuoteRequest } from "@/utils/hooks/useSendQuoteRequest";
import { QuoteFormProps } from "../QuoteForm";

// TYPE DEFINTIONS
interface FormData {
  name: string;
  email: string;
  industry?: string;
  details?: string;
}

interface HomeLayoutQuoteFormProps extends QuoteFormProps {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
}

const ChakraForm = chakra("form");

export default function MachinesLayoutQuoteForm({
  formTitle,
  field1Placeholder,
  field2Placeholder,
  field3Placeholder,
  submitButtonText,
  setSubmitSuccessful,
}: QuoteFormProps) {
  const { register, handleSubmit, errors, onSubmit } = useSendQuoteRequest();

  return (
    <ChakraForm
      bg="brand.primary"
      onSubmit={handleSubmit((data) => onSubmit(data, setSubmitSuccessful))}
    >
      <Text textAlign="center" fontSize="3xl" mt={8} color="white">
        {formTitle || "Request a Quote"}
      </Text>
      <VStack spacing={6} px={8} py={10} borderRadius="lg" boxShadow="xl">
        <HStack>
          <FormControl isRequired>
            <Input
              bg="white"
              borderColor="white"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="name"
              placeholder={field1Placeholder}
              _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
              aria-label="Name"
              _hover={{
                borderColor: "brand.accentGreen",
              }}
              {...register("name", { required: true })}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              bg="white"
              borderColor="brand.primary"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="email"
              type="email"
              placeholder="Email"
              _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
              aria-label="Email"
              _hover={{
                borderColor: "brand.accentGreen",
              }}
              {...register("email", { required: true })}
            />
          </FormControl>
          <FormControl>
            <Input
              bg="white"
              borderColor="brand.primary"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="industry"
              placeholder={field2Placeholder}
              _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
              aria-label="Industry type"
              _hover={{
                borderColor: "brand.accentGreen",
              }}
              {...register("industry")}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <Textarea
            bg="white"
            borderColor="brand.primary"
            focusBorderColor="brand.accentGreen"
            borderRadius="3xl"
            border="2px"
            id="details"
            placeholder="Share additional information or questions you have. Our team will personally connect with you about this quote."
            _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
            aria-label="Share additional information or questions"
            _hover={{
              borderColor: "brand.accentGreen",
            }}
            {...register("details")}
          />
        </FormControl>
        <Button px={12} py={6} my={8} variant="mc-red" w="full" type="submit">
          Submit
        </Button>
      </VStack>
    </ChakraForm>
  );
}
