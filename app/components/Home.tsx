"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
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

  console.log("Page blocks:", data.page.blocks);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksHero": {
            return <Hero key={i} {...block} />;
          }
          // case "PageBlocksCompanyValues": {
          //   return <CompanyValues key={i} {...block} />
          // }
          // case "PageBlocksLocationSection": {
          //   return <Location key={i} {...block} />
          // }
        }
      })}
    </Grid>
  );
}
