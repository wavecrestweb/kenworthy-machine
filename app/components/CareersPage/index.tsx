"use client";

//LIBRARY IMPORTS
import { PageAndFooterQuery } from "@/tina/__generated__/types";
import { Grid } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";

//LOCAL IMPORTS
import Benefits from "./Benefits";
import CareersHero from "./CareersHero";
import Footer from "../Footer";
import Openings from "./Openings";
import WhyKM from "./WhyKM";

export default function CareersPage(props: {
  data: PageAndFooterQuery;
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
          case "PageCareersBlocksWhyKM": {
            return <WhyKM key={i} {...block} />;
          }
          case "PageCareersBlocksOpenings": {
            return <Openings key={i} {...block} />;
          }
        }
      })}
      <Footer
        logo={data.footer.logo}
        navLinks={data.footer.navLinks}
        contactInfo={data.footer.contactInfo}
      />
    </Grid>
  );
}
