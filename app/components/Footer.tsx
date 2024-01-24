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

const Footer = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" p="72px 63px">
      <GridItem colSpan={2}>
        <Stack spacing="50px">
          <Box>
            <Image
              src="/images/kenworthy-logo.jpg"
              alt="Kenworthy Machine"
              width={500}
              height={500}
            />
          </Box>
          <Box>
            <Text variant="footer" textDecoration="underline">
              Mailing Address
            </Text>
            <Text variant="footer">14751 North Kelsey Street, Suite 105</Text>
            <Text variant="footer">PMB 616</Text>
            <Text variant="footer">Monroe, WA 98272-1458</Text>
          </Box>

          <Box>
            <Text variant="footer" textDecoration="underline">
              Shipping Address
            </Text>
            <Text variant="footer">30330 NE 172nd Street</Text>
            <Text variant="footer">Duvall, WA 98019</Text>
          </Box>

          <Box>
            <Text variant="footer" textDecoration="underline">
              Phone
            </Text>
            <Text variant="footer">(425) 788-2100</Text>
          </Box>

          <Box>
            <Text variant="footer" textDecoration="underline">
              Email
            </Text>
            <Text variant="footer">sales@kenworthymachine.com</Text>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colStart={4} colEnd={6}>
        <Stack spacing="57px" pt="28px">
          <Box>
            <Link href="/about-us" variant="footer">
              About Us
            </Link>
          </Box>
          <Box>
            <Link href="/view-machines" variant="footer">
              View Machines
            </Link>
          </Box>
          <Box>
            <Link href="/careers" variant="footer">
              Careers
            </Link>
          </Box>
          <Box>
            <Link href="/request-quote" variant="footer">
              Contact Us
            </Link>
          </Box>
          <Box>
            <Link href="/request-quote" variant="footer">
              Request a Quote
            </Link>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
