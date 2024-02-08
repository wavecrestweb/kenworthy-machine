// LIBRARY IMPORTS
import { extendTheme } from "@chakra-ui/react";
import { cardTheme } from "./theme/components/card";

const customTheme = extendTheme({
  colors: {
    brand: {
      backgroundDark: "#0b113e",
      backgroundMed: "#232952",
      text: "#0b113e",
      textLight: "#938f8f",
      button: "#db0a40",
      primary: "#0b113e",
      secondary: "#db0a40",
      accentGreen: "#32CD32",
      accentGrey: "#787373",
    },
  },
  fonts: {
    heading: "var(--font-roboto-slab)",
    body: "var(--font-lato)",
  },
  components: {
    Link: {
      variants: {
        buttonPrimary: {
          color: "white",
          backgroundColor: "brand.button",
          borderRadius: "var(--border-radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
          fontWeight: "700",
          _hover: {
            color: "var(--text-color)",
            transitionDuration: "300ms",
            textDecoration: "none",
          },
        },
        buttonSecondary: {
          color: "var(--text-color)",
          backgroundColor: "white",
          borderRadius: "var(--border-radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
          fontWeight: "700",
          _hover: {
            backgroundColor: "var(--background-color-light)",
            transitionDuration: "300ms",
            textDecoration: "none",
          },
        },
        navigation: {
          color: "white",
          fontSize: "24px",
          _hover: {
            borderBottom: "solid 2px",
            borderBottomColor: "brand.button",
            textDecoration: "none",
            transitionDuration: "300ms",
          },
        },
        footer: {
          _hover: {
            borderBottom: "solid 2px",
            borderBottomColor: "brand.button",
            textDecoration: "none",
            transitionDuration: "300ms",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        backgroundColor: "brand.backgroundDark",
        borderRadius: "20px",
        color: "white",
        fontWeight: "bold",
        fontFamily: "body",
      },
      sizes: {},
      variants: {
        "mc-blue": {
          color: "white",
          fontSize: "xl",
          lineHeight: "6",
          _hover: {
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out",
          },
        },
        "mc-white": {
          color: "brand.text",
          backgroundColor: "white",
          fontSize: "xl",
          lineHeight: "6",
          _hover: {
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out",
          },
        },
      },
    },
    Card: cardTheme,
    Heading: {
      variants: {
        footer: {
          color: "white",
          fontFamily: "body",
          fontSize: "2xl",
          fontWeight: "bold",
          lineHeight: "1.8rem",
          textDecoration: "underline",
        },
      },
    },
  },
  textStyles: {
    h5: {
      fontSize: "xl",
      lineHeight: "6",
      fontWeight: "bold",
    },
    "sm-p": {
      fontSize: "md",
      lineHeight: "5",
      fontWeight: "normal",
    },
  },
  layerStyles: {
    whiteBg: {
      bg: "white",
      color: "brand.text",
    },
    darkBg: {
      bg: "brand.backgroundDark",
      color: "white",
    },
    medBg: {
      bg: "brand.backgroundMed",
      color: "white",
    },
  },
});

export default customTheme;
