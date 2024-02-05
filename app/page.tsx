"use client";

//LIBRARY IMPORTS
import { Link } from "@chakra-ui/next-js";
import { Center, Box, Grid } from "@chakra-ui/react";
import Image from "next/image";

//LOCAL IMPORTS
import Hero from "./components/Hero";
import CompanyValues from "./components/CompanyValues";
import Card from "./components/Card";

export default function Home() {
  const divStyle = {
    minHeight: "1000px",
    backgroundColor: "var(--primary-red)",
    margin: "12px",
    padding: "12px",
    fontSize: "16px",
  };

  return (
    <Grid templateColumns={"1fr"}>
      <Hero />
      <CompanyValues />
      <Card />
    </Grid>
  );
}
