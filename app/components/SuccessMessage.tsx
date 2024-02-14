// LIBRARY IMPORTS
import { Text, VStack, Icon } from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa6";

// SUCCESS MESSAGE COMPONENT DEFINITION
export default function SuccessMessage() {
  return (
    <VStack spacing={4} align="center">
      <Icon as={FaRegPaperPlane} boxSize={12} color="brand.secondary" />
      <Text fontSize="3xl" fontWeight="bold" color="brand.secondary" mb={4}>
        THANK YOU!
      </Text>
      <Text textAlign="center">
        We have received your request. Our team will reach out to you using the
        contact information provided.
      </Text>
    </VStack>
  );
}
