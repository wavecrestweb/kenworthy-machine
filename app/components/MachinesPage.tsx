"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import RequestQuote from "./RequestQuote";
import Machines from "./Machines";

export default function MachinesPage(props: {
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
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageViewMachinesBlocksMachines": {
            return <Machines key={i} {...block} />;
          }
          case "PageViewMachinesBlocksQuoteSection": {
            return <RequestQuote key={i} {...block} />;
          }
        }
      })}
    </Grid>
  );
}
