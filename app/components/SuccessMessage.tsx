// LIBRARY IMPORTS
import { Box, Button, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaRegPaperPlane, FaXmark } from "react-icons/fa6";

// TYPE DEFINITIONS
type SuccessMessageProps = {
  handleCloseSuccess: () => void;
};

// SUCCESS MESSAGE COMPONENT DEFINITION
export default function SuccessMessage({
  handleCloseSuccess,
}: SuccessMessageProps) {
  return (
    <Box position="relative" py={16}>
      <IconButton
        aria-label="close success message"
        position="absolute"
        right={3}
        top={3}
        onClick={handleCloseSuccess}
        variant="ghost"
        color="brand.secondary"
        fontSize="2xl"
        _hover={{
          background: "brand.primary",
          transform: "scale(1.1)",
          transition: "transform 0.2s ease-in-out",
        }}
        icon={<FaXmark />}
      />
      <VStack spacing={4} align="center" padding={3}>
        <Icon as={FaRegPaperPlane} boxSize={12} color="brand.secondary" />
        <Text fontSize="3xl" fontWeight="bold" color="brand.secondary" mb={4}>
          THANK YOU!
        </Text>
        <Text textAlign="center" maxW="85%" mb={4} fontWeight="bold">
          We have received your request. Our team will reach out to you using
          the contact information provided.
        </Text>
        <Button onClick={handleCloseSuccess} variant="mc-red">
          Submit another request
        </Button>
      </VStack>
    </Box>
  );
}
