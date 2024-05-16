// LIBRARY IMPORTS
import {
  Button,
  FormControl,
  Input,
  Textarea,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

// LOCAL IMPORTS
import { useSendQuoteRequest } from "@/utils/hooks/useSendQuoteRequest";

// TYPE DEFINTIONS
interface RequestQuoteForm {
  formTitle?: string | null;
  field1Placeholder?: string | null;
  field2Placeholder?: string | null;
  field3Placeholder?: string | null;
  submitButtonText?: string | null;
}

interface HomeQuoteFormProps extends RequestQuoteForm {
  setSubmitSuccessful: Dispatch<SetStateAction<boolean>>;
  buttonDisabled?: boolean;
  setButtonDisabled?: Dispatch<SetStateAction<boolean>>;
}

export default function HomeQuoteForm({
  formTitle,
  field1Placeholder,
  field2Placeholder,
  field3Placeholder,
  submitButtonText,
  setSubmitSuccessful,
  buttonDisabled,
  setButtonDisabled,
}: HomeQuoteFormProps) {
  // CUSTOM HOOK
  const { register, handleSubmit, formState, onSubmit } = useSendQuoteRequest();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, setSubmitSuccessful))}
    >
      <Text textAlign="center" fontSize="3xl" mt={8} color="brand.text">
        {formTitle || "Request a Quote"}
      </Text>
      <VStack
        spacing={6}
        px={8}
        py={10}
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
      >
        <FormControl isRequired>
          <Input
            borderColor="brand.primary"
            focusBorderColor="brand.accentGreen"
            borderRadius="full"
            border="2px"
            id="name"
            placeholder={field1Placeholder || "Name"}
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
            borderColor="brand.primary"
            focusBorderColor="brand.accentGreen"
            borderRadius="full"
            border="2px"
            id="industry"
            placeholder={field2Placeholder || "Industry type"}
            _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
            aria-label="Industry type"
            _hover={{
              borderColor: "brand.accentGreen",
            }}
            {...register("industry")}
          />
        </FormControl>
        <FormControl>
          <Textarea
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
        <Button
          px={12}
          py={6}
          my={8}
          variant={buttonDisabled ? "mc-white" : "mc-red"}
          w="full"
          type="submit"
          disabled={buttonDisabled}
          onClick={
            setButtonDisabled ? () => setButtonDisabled(true) : undefined
          }
        >
          {buttonDisabled ? "Submitting..." : submitButtonText || "Submit"}
        </Button>
      </VStack>
    </form>
  );
}
