import { Text, Box } from "@chakra-ui/react";

interface MachineTypeLabelProps {
  type?: string | null;
}

const MachineTypeLabel: React.FC<MachineTypeLabelProps> = ({ type }) => {
  const colors = {
    bg: "brand.text",
    text: "white",
  };

  switch (type) {
    case "Mill":
      colors.bg = "brand.accentOrange";
      colors.text = "brand.text";
      break;
    case "Lathe":
      colors.bg = "brand.accentYellow";
      colors.text = "brand.text";
      break;
    case "Inspection":
      colors.bg = "brand.secondary";
      colors.text = "white";
      break;
    case "Bandsaw":
      colors.bg = "brand.accentGreen";
      colors.text = "brand.text";
      break;
    default:
  }

  return (
    <Box w="26%" h="38%" position="absolute" top="0" right="-1px">
      <Box
        as="svg"
        width="126"
        height="123"
        viewBox="0 0 126 123"
        fill={colors.bg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="cardLabel"
          d="M105.779 0.443114C116.825 0.443111 125.779 9.39754
          125.779 20.4433L125.778 122.386L0.803223 0.443178L105.779 0.443114Z"
        />
      </Box>
      <Text
        as="span"
        color={colors.text}
        fontWeight="bold"
        position="absolute"
        py="1rem"
        right="-0.7rem"
        textAlign="center"
        textStyle="sm-p"
        top="0.7rem"
        transform="rotate(45deg)"
        width="6rem"
      >
        {type}
      </Text>
    </Box>
  );
};

export default MachineTypeLabel;
