import { extendTheme } from "@chakra-ui/react";

const buttonTheme = extendTheme({
  components: {
    Link: {
      variants: {
        buttonPrimary: {
          color: "white",
          backgroundColor: "var(--primary-red)",
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
            color: "var(--text-color-light)",
            borderBottom: "solid var(--primary-red) 2px",
            textDecoration: "none",
            transitionDuration: "300ms",
          },
        },
      },
    },
  },
});

export default buttonTheme;
