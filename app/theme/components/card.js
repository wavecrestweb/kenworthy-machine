import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "white",
    boxShadow: "0px 6px 4px 0px #00000040",
    borderRadius: "1.25rem",
  },
  header: {
    p: "1.25rem",
  },
  footer: {
    backgroundColor: "brand.primary",
    borderBottomRadius: "1.25rem",
  },
});

const variants = {
  front_xs: definePartsStyle({
    container: {
      // w and h for the whole card
      w: "10rem",
      h: "15rem",
      my: "0.5rem",
      overflow: "hidden",
    },
    header: {
      // replace default p with 0px
      p: "0",
    },
    body: {
      p: "1rem 0.08rem 0",
      // maxHeight = container height / 2 - footer height;
      // dividing by 2 accounts for the photo that takes up half of card's height
      maxHeight: "6rem",
      overflow: "hidden",
    },
    footer: {
      backgroundColor: "brand.primary",
      w: "100%",
      p: "0rem",
      // h depends on the font size for the button; back should be identical
      h: "2.6rem",
    },
  }),
  front_sm: definePartsStyle({
    container: {
      w: "12rem",
      h: "16rem",
      my: "1rem",
      overflow: "hidden",
    },
    header: {
      p: "0",
    },
    body: {
      pt: "1.5rem",
      maxHeight: "4.75rem",
      overflow: "hidden",
    },
    footer: {
      backgroundColor: "brand.primary",
      w: "100%",
      p: "0.25rem",
      h: "3.25rem",
    },
  }),
  front_md: definePartsStyle({
    container: {
      w: "14rem",
      h: "18rem",
      my: "1rem",
      overflow: "hidden",
    },
    header: {
      p: "0",
    },
    body: {
      pt: "1.75rem",
      maxHeight: "5.75rem",
      overflow: "hidden",
    },
    footer: {
      backgroundColor: "brand.primary",
      w: "100%",
      p: "0.25rem",
      h: "3.25rem",
    },
  }),
  front_lg: definePartsStyle({
    container: {
      w: "20rem",
      h: "26rem",
      my: "1rem",
      overflow: "hidden",
    },
    header: {
      p: "0",
    },
    body: {
      pt: "3rem",
      maxHeight: "8rem",
      overflow: "hidden",
    },
    footer: {
      w: "100%",
      p: "1.25rem",
      h: "5rem",
    },
  }),
  front_xl: definePartsStyle({
    container: {
      w: "22rem",
      h: "30rem",
      my: "1rem",
      overflow: "hidden",
    },
    header: {
      p: "0",
    },
    body: {
      pt: "3.5rem",
      maxHeight: "9.5rem",
      overflow: "hidden",
    },
    footer: {
      backgroundColor: "brand.primary",
      w: "100%",
      p: "1.5rem",
      h: "5.5rem",
    },
  }),
  back_xs: definePartsStyle({
    container: {
      // w and h for the whole card; front should be identical
      // front my should be identical
      backgroundColor: "brand.primary",
      opacity: "95%",
      w: "10rem",
      h: "15rem",
      my: "0.5rem",
    },
    header: {
      p: "1rem 0.3rem 0.25rem",
      // height depends on the font size and needs to accomodate 2 lines of text
      height: "4.25rem",
      overflow: "hidden",
    },
    body: {
      p: "0 0.5rem 0 1rem",
      // maxHeight = container height - footer height - header height
      maxHeight: "8.15rem",
      overflow: "auto",
    },
    footer: {
      backgroundColor: "white",
      p: "0rem",
      // h depends on the font size for the button; front should be identical
      h: "2.6rem",
      w: "100%",
    },
  }),
  back_sm: definePartsStyle({
    container: {
      backgroundColor: "brand.primary",
      opacity: "95%",
      w: "12rem",
      h: "16rem",
      my: "1rem",
    },
    header: {
      p: "1rem 0.3rem 0.25rem",
      height: "4.25rem",
      overflow: "hidden",
    },
    body: {
      p: "0 0.5rem 0 1rem",
      maxHeight: "11rem",
      overflow: "auto",
    },
    footer: {
      backgroundColor: "white",
      p: "0.25rem",
      h: "3.25rem",
      w: "100%",
    },
  }),
  back_md: definePartsStyle({
    container: {
      backgroundColor: "brand.primary",
      opacity: "95%",
      w: "14rem",
      h: "18rem",
      my: "1rem",
    },
    header: {
      p: "1.25rem 0.6rem 0.25rem",
      height: "4.75rem",
      overflow: "hidden",
    },
    body: {
      p: "0 0.5rem 0 1.25rem",
      maxHeight: "10rem",
      overflow: "auto",
    },
    footer: {
      backgroundColor: "white",
      p: "0.25rem",
      h: "3.25rem",
      w: "100%",
    },
  }),
  back_lg: definePartsStyle({
    container: {
      backgroundColor: "brand.primary",
      opacity: "95%",
      w: "20rem",
      h: "26rem",
      my: "1rem",
    },
    header: {
      p: "3rem 1rem 2.25rem",
      h: "8.25rem",
      overflow: "hidden",
    },
    body: {
      maxHeight: "12.75rem",
      p: "0 1.5rem 0 3.5rem",
      overflow: "auto",
    },
    footer: {
      backgroundColor: "white",
      w: "100%",
      p: "1.25rem",
      h: "5rem",
    },
  }),
  back_xl: definePartsStyle({
    container: {
      backgroundColor: "brand.primary",
      opacity: "95%",
      w: "22rem",
      h: "30rem",
      my: "1rem",
    },
    header: {
      p: "3rem 1rem 3.5rem",
      h: "8.25rem",
      overflow: "hidden",
    },
    body: {
      p: "0 1.5rem 0 3.5rem",
      maxHeight: "16.25rem",
      overflow: "auto",
    },
    footer: {
      backgroundColor: "white",
      w: "100%",
      p: "1.5rem",
      h: "5.5rem",
    },
  }),
  position_sm: definePartsStyle({
    container: {
      boxShadow: "0px 4px 4px 0px #00000040",
      p: "1.25rem",
    },
    header: {
      p: "0px",
    },
    body: {
      p: "0px",
    },
    footer: {
      p: "2.5rem 0rem 0rem 0rem",
      justifyContent: "center",
      backgroundColor: "white",
    },
  }),
  position_lg: definePartsStyle({
    container: {
      boxShadow: "0px 4px 4px 0px #00000040",
      p: "2rem 3rem 2.5rem 2rem",
    },
    footer: {
      backgroundColor: "white",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, variants });
