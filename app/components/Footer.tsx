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

const links = [
  { href: "/about-us", text: "About Us" },
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

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      p={{ md: "42px 54px", lg: "72px 63px" }}
    >
      <GridItem colSpan={2}>
        <Stack spacing={{ md: "50px", lg: "50px" }}>
          <Box>
            <Image
              src="/images/kenworthy-logo.jpg"
              alt="Kenworthy Machine"
              width={500}
              height={500}
            />
          </Box>
          <>
            {contactInfo.map(({ heading, content }) => (
              <Box key={heading}>
                <Heading variant="footer" pb={{ md: "15px" }}>
                  {heading}
                </Heading>
                {content.map((line) => (
                  <Text key={line} size={{ md: "l", lg: "xl" }}>
                    {line}
                  </Text>
                ))}
              </Box>
            ))}
          </>
        </Stack>
      </GridItem>
      <GridItem colStart={4} colEnd={6}>
        <Stack
          spacing={{ md: "62px", lg: "57px" }}
          pt={{ md: "8px", lg: "28px" }}
        >
          {links.map(({ href, text }) => (
            <FooterNavLink key={text} href={href}>
              {text}
            </FooterNavLink>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};

const FooterNavLink = ({ children, ...props }: LinkProps) => {
  return (
    <Box>
      <Link variant="footer" size={{ md: "l", lg: "xl" }} {...props}>
        {children}
      </Link>
    </Box>
  );
};

export default Footer;
