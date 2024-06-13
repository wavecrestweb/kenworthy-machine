// LIBRARY IMPORTS
import {
  Button,
  chakra,
  FormControl,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

// LOCAL IMPORTS
import { useSendQuoteRequest } from "@/utils/hooks/useSendQuoteRequest";
import { PageViewMachinesBlocksQuoteSection } from "@/tina/__generated__/types";

// TYPE DEFINTIONS
interface MachineLayoutQuoteFormProps
  extends PageViewMachinesBlocksQuoteSection {
  setSubmitSuccessful: Dispatch<SetStateAction<boolean>>;
  buttonDisabled?: boolean;
  setButtonDisabled?: Dispatch<SetStateAction<boolean>>;
}

const ChakraForm = chakra("form");

export default function MachinesQuoteForm(props: MachineLayoutQuoteFormProps) {
  const { register, handleSubmit, formState, onSubmit } = useSendQuoteRequest();

  return (
    <ChakraForm
      pt={14}
      pb={24}
      bg="brand.primary"
      onSubmit={handleSubmit((data) =>
        onSubmit(data, props.setSubmitSuccessful),
      )}
    >
      <Heading
        textAlign="center"
        fontSize="3xl"
        fontWeight="normal"
        mt={8}
        color="white"
      >
        {props?.requestQuoteForm?.formTitle || "Request a Quote"}
      </Heading>
      <VStack spacing={6} px={8} py={10} maxW="6xl" mx="auto">
        <HStack w="full" spacing={6}>
          <FormControl isRequired>
            <Input
              p={6}
              bg="white"
              borderColor="white"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="name"
              fontSize="lg"
              placeholder={props?.requestQuoteForm?.field1Placeholder || "Name"}
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
              p={6}
              bg="white"
              borderColor="brand.primary"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="email"
              type="email"
              fontSize="lg"
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
              p={6}
              bg="white"
              borderColor="brand.primary"
              focusBorderColor="brand.accentGreen"
              borderRadius="full"
              border="2px"
              id="industry"
              fontSize="lg"
              placeholder={
                props?.requestQuoteForm?.field2Placeholder || "Industry type"
              }
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
            p={4}
            bg="white"
            borderColor="brand.primary"
            focusBorderColor="brand.accentGreen"
            borderRadius="3xl"
            border="2px"
            id="details"
            fontSize="lg"
            placeholder={
              props?.requestQuoteForm?.field3Placeholder ||
              "Share additional information or questions you have. Our team will personally connect with you about this quote."
            }
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
          cursor={props?.buttonDisabled ? "not-allowed" : "pointer"}
          variant={props?.buttonDisabled ? "mc-white" : "mc-red"}
          fontSize="2xl"
          w="md"
          type="submit"
          disabled={props?.buttonDisabled}
          onClick={() => {
            if (props?.setButtonDisabled) {
              props.setButtonDisabled(true);
            }
          }}
        >
          {props?.buttonDisabled
            ? "Submitting..."
            : props?.requestQuoteForm?.submitButtonText || "Submit"}
        </Button>
      </VStack>
    </ChakraForm>
  );
}
