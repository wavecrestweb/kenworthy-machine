"use client";

//LIBRARY IMPORTS
import { PageAndFooterQuery } from "@/tina/__generated__/types";
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";

//LOCAL IMPORTS
import Machines from "../MachinesPage/Machines";
import Careers from "./Careers";
import CompanyValues from "./CompanyValues";
import Hero from "./Hero";
import Location from "./Location";
import RequestQuote from "./RequestQuote";
import Footer from "../Footer";

export default function Home(props: {
  data: PageAndFooterQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  // HOOKS
  const { data } = useTina(props);
  console.log("data", data);

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
            return <Machines key={i} {...block} path="/" />;
          }
          case "PageHomeBlocksCareerSection": {
            return <Careers key={i} {...block} />;
          }
        }
      })}
      <Footer
        navLinks={data.footer.navLinks}
        contactInfo={data.footer.contactInfo}
      />
    </Grid>
  );
}
