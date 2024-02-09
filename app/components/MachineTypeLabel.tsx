import { Text, Box } from "@chakra-ui/react";

interface MachineTypeLabelProps {
  type?: string | null;
}

const MachineTypeLabel: React.FC<MachineTypeLabelProps> = ({ type }) => {
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
        {type}
      </Text>
    </Box>
  );
};

export default MachineTypeLabel;
