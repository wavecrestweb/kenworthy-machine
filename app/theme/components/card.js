import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "white",
    boxShadow: "0px 6px 4px 0px #00000040",
  },
  footer: {
    backgroundColor: "brand.backgroundDark",
  },
});

const sizes = {
  lg: definePartsStyle({
    container: {
      borderRadius: "20px",
      w: "md",
      h: "xl",
    },
    header: {
      h: "l",
    },
    footer: {
      borderBottomRadius: "20px",
    },
  }),
};

const variants = {
  front: definePartsStyle({
    container: {
      backgroundColor: "white",
    },
    footer: {
      backgroundColor: "brand.backgroundDark",
    },
  }),
  back: definePartsStyle({
    container: {
      backgroundColor: "brand.backgroundDark",
    },
    footer: {
      backgroundColor: "white",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes, variants });
