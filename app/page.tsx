"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";

//LOCAL IMPORTS
import CompanyValues from "./components/CompanyValues";
import Hero from "./components/Hero";
import Machines from "./components/Machines";

export default function Home() {
  return (
    <Grid templateColumns={"1fr"}>
      <Hero />
      <CompanyValues />
      <Machines />
    </Grid>
  );
}
