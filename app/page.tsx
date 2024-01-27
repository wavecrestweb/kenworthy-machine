"use client";
import { Grid } from "@chakra-ui/react";
import Location from "./components/Location";

export default function Home() {
  return (
    <Grid templateColumns={"1fr"}>
      <Location />
    </Grid>
  );
}
