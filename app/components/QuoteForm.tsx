// LIBRARY IMPORTS
import {
  VStack,
  FormControl,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";

// TYPE DEFINTIONS
interface QuoteFormProps {
  formTitle?: string;
  field1Placeholder?: string;
  field2Placeholder?: string;
  field3Placeholder?: string;
  submitButtonText?: string;
}

export default function QuoteForm({
  formTitle,
  field1Placeholder,
  field2Placeholder,
  field3Placeholder,
  submitButtonText,
}: QuoteFormProps) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
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
          />
        </FormControl>
        <Button
          bg="brand.button"
          color="white"
          borderRadius="full"
          px={12}
          py={6}
          my={8}
          fontWeight="bold"
          fontSize="xl"
          _hover={{
            bg: "brand.button",
            transform: "scale(1.03)",
            transition: "transform 0.2s ease-in-out",
          }}
          type="submit"
          w="full"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}
