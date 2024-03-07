// LIBRARY IMPORTS
import {
  Box,
  Button,
  Center,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa6";

// TYPE DEFINITIONS
type SuccessMessageProps = {
  handleCloseSuccess: () => void;
};

// SUCCESS MESSAGE COMPONENT DEFINITION
export default function MachinesSuccessMessage({
  handleCloseSuccess,
}: SuccessMessageProps) {
  return (
    <Box position="relative" py={16} h="lg" bg="brand.primary">
      <VStack spacing={4} align="center" padding={3}>
        <Icon as={FaRegPaperPlane} boxSize={12} color="brand.secondary" />
        <Text fontSize="3xl" fontWeight="bold" color="brand.secondary" mb={4}>
          THANK YOU!
        </Text>
        <Text textAlign="center" maxW="22%" fontSize="2xl" color="white" mb={8}>
          We have received your request. Our team will reach out to you using
          the contact information provided.
        </Text>
      </VStack>
      <Center position="absolute" left={0} right={0}>
        <Button onClick={handleCloseSuccess} variant="mc-red">
          Submit another request
        </Button>
      </Center>
    </Box>
  );
}
