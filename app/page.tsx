"use client";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  const divStyle = {
    minHeight: "1000px",
    backgroundColor: "var(--primary-red)",
    margin: "12px",
  };

  return (
    <Grid templateColumns={"1fr"}>
      <div style={divStyle}>This is a red box</div>
    </Grid>
  );
}
