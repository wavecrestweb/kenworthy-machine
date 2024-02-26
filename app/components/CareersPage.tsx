"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import Benefits from "./Benefits";

export default function CareersPage(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  // HOOKS
  const { data } = useTina(props);
  console.log(data);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageCareersBlocksBenefits": {
            return <Benefits key={i} {...block} />;
          }
        }
      })}
    </Grid>
  );
}
