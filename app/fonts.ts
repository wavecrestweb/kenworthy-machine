import { Roboto_Slab, Lato } from "next/font/google";

export const roboto_slab = Roboto_Slab({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
