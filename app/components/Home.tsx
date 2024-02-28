"use client";

//LIBRARY IMPORTS
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";
import { useEffect, useState } from "react";

//LOCAL IMPORTS
import Hero from "./Hero";
import CompanyValues from "./CompanyValues";
import Machines from "./Machines";
import RequestQuote from "./RequestQuote";
import Location from "./Location";
import Careers from "./Careers";

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
          case "PageHomeBlocksHero": {
            return <Hero key={i} {...block} />;
          }
          case "PageHomeBlocksValues": {
            return <CompanyValues key={i} {...block} />;
          }
          case "PageHomeBlocksQuoteSection": {
            return <RequestQuote key={i} {...block} />;
          }
          case "PageHomeBlocksLocation": {
            return <Location key={i} {...block} />;
          }
          case "PageHomeBlocksMachineCarousel": {
            return <Machines key={i} width={width} {...block} path="/" />;
          }
        }
      })}
      <Careers />
    </Grid>
  );
}
