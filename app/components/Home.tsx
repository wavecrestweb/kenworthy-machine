"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";
import { useEffect, useState } from "react";

//LOCAL IMPORTS
import Hero from "./Hero";
import CompanyValues from "./CompanyValues";
import Machines from "@/app/components/Machines";
import RequestQuote from "./RequestQuote";
import Location from "./Location";

export default function Home(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  // HOOKS
  const { data } = useTina(props);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  }, []);

  return (
    <Grid templateColumns={"1fr"}>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksHero": {
            return <Hero key={i} {...block} />;
          }
          case "PageBlocksValues": {
            return <CompanyValues key={i} {...block} />;
          }
          case "PageBlocksQuoteSection": {
            return <RequestQuote key={i} {...block} />;
          }
          case "PageBlocksLocation": {
            return <Location key={i} {...block} />;
          }
          case "PageBlocksMachineCarousel": {
            return <Machines key={i} width={width} {...block} />;
          }
        }
      })}
    </Grid>
  );
}
