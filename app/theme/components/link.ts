import { defineStyleConfig } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  baseStyle: {
    color: "white",
    fontWeight: "bold",
    borderColor: "transparent",
    borderWidth: "3px",
  },
  variants: {
    buttonPrimaryDark: {
      alignItems: "center",
      backgroundColor: "brand.secondary",
      borderRadius: "full",
      display: "flex",
      justifyContent: "center",
      p: "0.375rem",
      _hover: {
        borderColor: "white",
        borderWidth: "3px",
        color: "brand.text",
        transitionDuration: "300ms",
        textDecoration: "none",
      },
      _active: {
        background: "brand.text",
        borderColor: "white",
        borderWidth: "3px",
        color: "white",
      },
    },
    buttonPrimaryLight: {
      alignItems: "center",
      backgroundColor: "brand.secondary",
      borderRadius: "full",
      display: "flex",
      justifyContent: "center",
      p: "0.375rem",
      fontWeight: "700",
      _hover: {
        borderColor: "brand.text",
        borderWidth: "3px",
        textDecoration: "none",
        transform: "scale(1)",
        transition: "transform 0.2s ease-in-out",
      },
      _active: {
        background: "brand.text",
        borderColor: "white",
        borderWidth: "3px",
        color: "white",
      },
    },
    buttonSecondary: {
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "full",
      color: "brand.text",
      display: "flex",
      justifyContent: "center",
      p: "0.375rem",
      fontWeight: "700",
      _hover: {
        backgroundColor: "brand.secondary",
        borderColor: "white",
        borderWidth: "3px",
        transitionDuration: "300ms",
        textDecoration: "none",
      },
      _active: {
        color: "white",
        backgroundColor: "brand.text",
      },
    },
    navigation: {
      fontSize: "24px",
      _hover: {
        borderBottom: "solid 2px",
        borderBottomColor: "brand.secondary",
        textDecoration: "none",
        transitionDuration: "300ms",
      },
    },
    footer: {
      _hover: {
        borderBottom: "solid 2px",
        borderBottomColor: "brand.secondary",
        textDecoration: "none",
        transitionDuration: "300ms",
      },
    },
    outline: {
      color: "brand.text",
      backgroundColor: "white",
      borderRadius: "full",
      borderColor: "brand.secondary",
      borderWidth: "2px",
      fontSize: "lg",
      p: "1rem 3.125rem",
      lineHeight: "5",
      textAlign: "center",
      _hover: {
        backgroundColor: "brand.secondaryGhost",
        transform: "scale(1.1)",
        transition: "transform 0.2s ease-in-out",
        textDecoration: "none",
      },
      _active: {
        backgroundColor: "brand.secondary",
        color: "white",
        transform: "scale(1.1)",
        transition: "transform 0.2s ease-in-out",
        textDecoration: "none",
      },
    },
  },
});
