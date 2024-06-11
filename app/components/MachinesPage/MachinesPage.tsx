"use client";

//LIBRARY IMPORTS
import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import MachinesQuoteForm from "./MachinesQuoteForm";
import Machines from "./Machines";
import MachinesSuccessMessage from "./MachinesSuccessMessage";

export default function MachinesPage(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  // SET STATES
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // HOOKS
  const handleCloseSuccess = () => {
    setSubmitSuccessful(false);
    setButtonDisabled(false);
  };
  const { data } = useTina(props);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageViewMachinesBlocksMachines": {
            return <Machines key={i} {...block} path="/view-machines" />;
          }
          case "PageViewMachinesBlocksQuoteSection": {
            return submitSuccessful ? (
              <MachinesSuccessMessage
                key={i}
                handleCloseSuccess={handleCloseSuccess}
              />
            ) : (
              <MachinesQuoteForm
                key={i}
                {...block}
                setSubmitSuccessful={setSubmitSuccessful}
                buttonDisabled={buttonDisabled}
                setButtonDisabled={setButtonDisabled}
              />
            );
          }
        }
      })}
    </Grid>
  );
}
