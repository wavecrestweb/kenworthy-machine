import { extendTheme } from "@chakra-ui/react";

const buttonTheme = extendTheme({
  components: {
    Link: {
      variants: {
        buttonPrimary: {
          color: "white",
          backgroundColor: "red",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
          fontWeight: "700",
          _hover: {
            color: "var(--text-color-light)",
            transitionDuration: "300ms",
          },
        },
        buttonSecondary: {
          color: "black",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
          fontWeight: "700",
          _hover: {
            color: "var(--text-color-light)",
            transitionDuration: "300ms",
          },
        },
      },
    },
  },
});

export default buttonTheme;
