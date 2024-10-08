import { Text, Box } from "@chakra-ui/react";

interface MachineTypeLabelProps {
  type?: string | null;
  path: string;
}

const MachineTypeLabel: React.FC<MachineTypeLabelProps> = ({ type, path }) => {
  const colors = {
    bg: "brand.text",
    text: "white",
  };

  const style =
    path === "/" ? responsiveValues.carousel : responsiveValues.machinesPage;

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
    <Box
      w="28%"
      h="40%"
      position="absolute"
      top={style.box.top}
      right={style.box.right}
    >
      <Box
        as="svg"
        width="100%"
        height="100%"
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
        py={style.text.py}
        right={style.text.right}
        textAlign="center"
        textStyle="sm-p"
        fontSize={style.text.fontSize}
        top={style.text.top}
        transform="rotate(43.916deg)"
        width={style.text.width}
      >
        {type}
      </Text>
    </Box>
  );
};

export default MachineTypeLabel;

const responsiveValues = {
  carousel: {
    box: { top: "-1px", right: "-2.75px" },
    text: {
      py: { base: "0.5rem", md: "0.25rem", "2xl": "1rem" },
      right: { base: "-0.3rem", md: "-0.5rem", "2xl": "-0.9rem" },
      fontSize: { base: "7px", md: "xs", "2xl": "lg" },
      top: { base: "-0.01rem", md: "0.625rem", "2xl": "0.5rem" },
      width: { base: "5rem", md: "4rem", "2xl": "6rem" },
    },
  },
  machinesPage: {
    box: { top: "-1px", right: "-2.75px" },
    text: {
      py: { base: "0.25rem", sm: "1rem" },
      right: { base: "-0.5rem", sm: "-0.9rem" },
      fontSize: { base: "8px", md: "xs", "2xl": "lg" },
      top: { base: "0.625rem", sm: "0.5rem" },
      width: { base: "4rem", sm: "6rem" },
    },
  },
};
