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
  formTitle: string;
  field1Placeholder: string;
  field2Placeholder: string;
  field3Placeholder: string;
  submitButtonText: string;
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
      <Text textAlign="center" fontSize="3xl" mt={8}>
        {formTitle}
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
            borderColor="brand.backgroundDark"
            borderRadius="full"
            id="name"
            placeholder={field1Placeholder}
            aria-label="Name"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            borderColor="brand.backgroundDark"
            borderRadius="full"
            id="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
        </FormControl>
        <FormControl>
          <Input
            borderColor="brand.backgroundDark"
            borderRadius="full"
            id="industry"
            placeholder={field2Placeholder}
            aria-label="Industry type"
          />
        </FormControl>
        <FormControl>
          <Textarea
            borderColor="brand.backgroundDark"
            borderRadius="3xl"
            id="details"
            placeholder="Share additional information or questions you have. Our team will personally connect with you about this quote."
            aria-label="Share additional information or questions"
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
