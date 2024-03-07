import {
  Box,
  Heading,
  Grid,
  GridItem,
  Link,
  LinkProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/images/kenworthy-logo.jpg";
import ContentWrapper from "./ContentWrapper";

const links = [
  { href: "/view-machines", text: "View Machines" },
  { href: "/careers", text: "Careers" },
  { href: "/request-quote", text: "Contact Us" },
  { href: "/request-quote", text: "Request a Quote" },
];

const contactInfo = [
  {
    heading: "Mailing Address",
    content: [
      "14751 North Kelsey Street, Suite 105",
      "PMB 616",
      "Monroe, WA 98272-1458",
    ],
  },
  {
    heading: "Shipping Address",
    content: ["30330 NE 172nd Street", "Duvall, WA 98019"],
  },
  {
    heading: "Phone",
    content: ["(425) 788-2100"],
  },
  {
    heading: "Email",
    content: ["sales@kenworthymachine.com"],
  },
];

export default function Footer() {
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
                {contactInfo.map(({ heading, content }) => (
                  <Box key={heading}>
                    <Heading
                      as="h4"
                      variant="footer"
                      pb={{ base: "1rem", md: "0.75rem", xl: "0.625rem" }}
                    >
                      {heading}
                    </Heading>
                    {content.map((line) => (
                      <Text
                        key={line}
                        fontSize={{ base: "1.25rem", xl: "1.5rem" }}
                        lineHeight={{ base: "1.5rem", xl: "1.8rem" }}
                      >
                        {line}
                      </Text>
                    ))}
                  </Box>
                ))}
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
              {links.map(({ href, text }) => (
                <FooterNavLink key={text} href={href}>
                  {text}
                </FooterNavLink>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </ContentWrapper>
    </Box>
  );
}

const FooterNavLink = ({ children, ...props }: LinkProps) => {
  return (
    <Box>
      <Link
        variant="footer"
        fontSize={{ md: "1.5rem", xl: "1.875rem" }}
        lineHeight={{ md: "1.8rem", xl: "2.25rem" }}
        {...props}
      >
        {children}
      </Link>
    </Box>
  );
};
