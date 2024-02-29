"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import QuoteForm from "./QuoteForm";
import Machines from "./Machines";

export default function MachinesPage(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  // HOOKS
  const { data } = useTina(props);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageViewMachinesBlocksMachines": {
            return <Machines key={i} {...block} path="/view-machines" />;
          }
          case "PageViewMachinesBlocksQuoteSection": {
            return <QuoteForm key={i} {...block} layoutType="machinesPage" />;
          }
        }
      })}
    </Grid>
  );
}
