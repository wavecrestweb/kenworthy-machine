"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";

//LOCAL IMPORTS
import Hero from "./components/Hero";
import CompanyValues from "./components/CompanyValues";
import Location from "./components/Location";

export default function Home() {
  return (
    <Grid templateColumns={"1fr"}>
      <Hero />
      <Location />
      <CompanyValues />
    </Grid>
  );
}
