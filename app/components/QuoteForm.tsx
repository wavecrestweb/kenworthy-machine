// LIBRARY IMPORTS
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

// LOCAL IMPORTS
import { sendEmail } from "@/utils/sendEmail";

// TYPE DEFINTIONS
interface QuoteFormProps {
  formTitle?: string;
  field1Placeholder?: string;
  field2Placeholder?: string;
  field3Placeholder?: string;
  submitButtonText?: string;
  setSubmitSuccessful: Dispatch<SetStateAction<boolean>>;
}

export interface FormData {
  name: string;
  email: string;
  industry: string;
  details: string;
}

export default function QuoteForm({
  formTitle,
  field1Placeholder,
  field2Placeholder,
  field3Placeholder,
  submitButtonText,
  setSubmitSuccessful,
}: QuoteFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const toast = useToast();

  // EVENT HANDLERS
  const onSubmit = (data: FormData) => {
    sendEmail(data)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        if (data.message === "Email sent") {
          setSubmitSuccessful(true);
          reset();
          toast({
            containerStyle: {
              width: "800px",
              maxWidth: "100%",
              border: "20px solid white",
            },
            description:
              "We have received your request. Our team will reach out to you using the contact information provided.",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Failed to send quote request.",
            description: "Please try again later.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        toast({
          title: "Error",
          description: "An error occurred while sending the quote request.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            placeholder={field1Placeholder}
            _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
            aria-label="Name"
            _hover={{
              borderColor: "brand.accentGreen",
            }}
            name="name"
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
            name="email"
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
            placeholder={field2Placeholder}
            _placeholder={{ opacity: 1, color: "brand.accentGrey" }}
            aria-label="Industry type"
            _hover={{
              borderColor: "brand.accentGreen",
            }}
            name="industry"
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
            name="details"
            {...register("details")}
          />
        </FormControl>
        <Button
          bg="brand.secondary"
          color="white"
          borderRadius="full"
          px={12}
          py={6}
          my={8}
          fontWeight="bold"
          fontSize="xl"
          _hover={{
            bg: "brand.secondary",
            transform: "scale(1.03)",
            transition: "transform 0.2s ease-in-out",
          }}
          w="full"
          type="submit"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}
