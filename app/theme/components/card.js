import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "white",
    boxShadow: "0px 6px 4px 0px #00000040",
    // On click
    // Change to: "Default";
    // Animate: Smart animate;
    // animation-timing-function: ease-out;
    // animation-duration: 600ms;
    // _active: {
    //   transition: "transform 600ms ease-out",
    // },
  },
  footer: {
    backgroundColor: "brand.primary",
  },
});

const sizes = {
  lg: definePartsStyle({
    container: {
      borderRadius: "20px",
      w: "sm",
      h: "lg",
      my: "4",
    },
    header: {
      p: "0",
    },
    body: {
      p: "0",
    },
    footer: {
      borderBottomRadius: "20px",
      w: "100%",
      p: "5",
    },
  }),
};

const variants = {
  front: definePartsStyle({
    container: {
      backgroundColor: "white",
      overflow: "hidden",
    },
    header: {
      w: "sm",
      h: "2xs",
    },
    body: {
      pt: "16",
    },
    footer: {
      backgroundColor: "brand.primary",
    },
  }),
  back: definePartsStyle({
    container: {
      backgroundColor: "brand.primary",
    },
    header: {
      pt: "12",
      pb: "14",
    },
    footer: {
      backgroundColor: "white",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes, variants });
