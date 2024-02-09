import { Text, Box } from "@chakra-ui/react";
export default function MachineTypeLabel() {
  return (
    <Box
      color="black"
      borderLeft="5.3rem solid transparent"
      borderRight="0px solid transparent"
      borderTop="5.3rem solid #FAD50AD4"
      position="absolute"
      top="0"
      right="0"
      borderTopRightRadius="20px"
    >
      <Text
        textStyle="sm-p"
        fontWeight="bold"
        top="-4rem"
        right="0.5rem"
        transform="rotate(45deg)"
        position="absolute"
      >
        Machine Type Label
      </Text>
    </Box>
  );
}
