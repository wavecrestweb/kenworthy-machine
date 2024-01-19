// LIBRARY IMPORTS
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    backgroundDark: '#0b113e',
    backgroundMed: '#232952',
    text: '#0b113e',
    textLight: '#938f8f',
    button: '#db0a40',
  },
  fonts: {
    heading: "Roboto Slab, serif",
    body: "Lato, sans-serif",
  },
});

export default customTheme;
