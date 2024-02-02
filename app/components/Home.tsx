"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/edit-state";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import Hero from "./Hero";

export default function Home(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  // HOOKS
  const { data } = useTina(props);

  return (
    <Grid templateColumns={"1fr"}>
      <Hero {...props.data.page.hero} />
    </Grid>
  );
}
