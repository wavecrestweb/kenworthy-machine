//LIBRARY IMPORTS
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { FooterNavLinks, FooterContactInfo } from "@/tina/__generated__/types";

//LOCAL IMPORTS
import logo from "../../public/images/kenworthy-logo.jpg";
import ContentWrapper from "./ContentWrapper";

export type navLinksData = (FooterNavLinks | null)[] | null | undefined;
export type contactInfo = (FooterContactInfo | null)[] | null | undefined;

export default function Footer(props: {
  navLinks: navLinksData;
  contactInfo: contactInfo;
}) {
  const { navLinks, contactInfo } = props;
  return (
    <Box bg="brand.primary">
      <ContentWrapper>
        <Grid
          templateColumns={{
            md: "repeat(7, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          p={{
            base: "3rem 1.375rem",
            md: "2.625rem 3.375rem",
            xl: "4.5rem 4rem",
          }}
          gap={{ md: "1.5rem" }}
          layerStyle="darkBg"
        >
          <GridItem colSpan={{ md: 4, xl: 2 }}>
            <Stack spacing={{ base: "1.875rem", md: "2rem", xl: "3.125rem" }}>
              <Box>
                <Box w={{ base: "10.375rem", md: "15rem", xl: "32.75rem" }}>
                  <Image src={logo} alt="Kenworthy Machine" />
                </Box>
              </Box>
              <>
                {contactInfo?.map(
                  (item) =>
                    item?.heading &&
                    item?.content && (
                      <FooterContactInfoBlock key={item?.heading} item={item} />
                    ),
                )}
              </>
            </Stack>
          </GridItem>
          <GridItem
            colStart={{ md: 5, xl: 4 }}
            colEnd={{ md: 8, xl: 6 }}
            display={{ base: "none", md: "grid" }}
          >
            <Stack
              spacing={{ md: "3.875rem", xl: "3.56rem" }}
              pt={{ md: "0.5rem", xl: "1.75rem" }}
            >
              {navLinks?.map(
                (link) =>
                  link?.href &&
                  link?.label && (
                    <FooterNavLinksBlock key={link?.label} link={link} />
                  ),
              )}
            </Stack>
          </GridItem>
        </Grid>
      </ContentWrapper>
    </Box>
  );
}

function FooterContactInfoBlock(props: { item: FooterContactInfo | null }) {
  const { item } = props;
  return (
    <Box key={item?.heading}>
      <Heading
        as="h4"
        variant="footer"
        pb={{ base: "1rem", md: "0.75rem", xl: "0.625rem" }}
      >
        {item?.heading}
      </Heading>
      <TinaMarkdown
        content={item?.content}
        components={{
          p: (props) => (
            <Text
              fontSize={{ base: "1.25rem", xl: "1.5rem" }}
              lineHeight={{ base: "1.5rem", xl: "1.8rem" }}
            >
              {props?.children}
            </Text>
          ),
        }}
      />
    </Box>
  );
}

function FooterNavLinksBlock(props: { link: FooterNavLinks | null }) {
  const { link } = props;
  return (
    <Box>
      <Link
        variant="footer"
        fontSize={{ md: "1.5rem", xl: "1.875rem" }}
        lineHeight={{ md: "1.8rem", xl: "2.25rem" }}
        href={link?.href ?? ""}
      >
        {link?.label}
      </Link>
    </Box>
  );
}
