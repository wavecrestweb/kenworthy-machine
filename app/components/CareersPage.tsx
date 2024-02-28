"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import Benefits from "./Benefits";
import CareersHero from "./CareersHero";

export default function CareersPage(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageCareersBlocksBenefits": {
            return <Benefits key={i} {...block} />;
          }
          case "PageCareersBlocksHero": {
            return <CareersHero key={i} {...block} />;
          }
        }
      })}
    </Grid>
  );
}
