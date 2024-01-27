// LIBRARY IMPORTS
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      backgroundDark: "#0b113e",
      backgroundMed: "#232952",
      text: "#0b113e",
      textLight: "#938f8f",
      button: "#db0a40",
    },
  },
  fonts: {
    heading: "var(--font-roboto-slab)",
    body: "var(--font-lato)",
  },
  components: {
    Link: {
      sizes: {
        l: {
          fontSize: "32px",
          fontWeight: "500",
          lineHeight: "38.4px",
        },
        xl: {
          fontSize: "36px",
          fontWeight: "500",
          lineHeight: "43.2px",
        },
      },
      variants: {
        buttonPrimary: {
          color: "white",
          backgroundColor: "red",
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
          fontSize: "24px", //32px?
          _hover: {
            borderBottom: "solid 2px",
            borderBottomColor: "red",
            textDecoration: "none",
            transitionDuration: "300ms",
          },
        },
        footer: {
          _hover: {
            borderBottom: "solid 2px",
            borderBottomColor: "red",
            textDecoration: "none",
            transitionDuration: "300ms",
          },
        },
      },
    },
    Text: {
      sizes: {
        l: {
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "24px",
        },
        xl: {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "28.8px",
        },
      },
    },
    Heading: {
      variants: {
        footer: {
          color: "white",
          fontFamily: "body",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "28.8px",
          textDecoration: "underline",
        },
      },
    },
  },
});

export default customTheme;
