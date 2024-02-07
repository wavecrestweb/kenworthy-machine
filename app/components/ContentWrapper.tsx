import { Box } from "@chakra-ui/react";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box maxW="1728px" mx="auto">
      {children}
    </Box>
  );
}
