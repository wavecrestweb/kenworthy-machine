import { Box, Link, Stack, SimpleGrid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <SimpleGrid columns={2} paddingTop="72px" paddingLeft="63px" h="894px">
      {/* Contact info hardcoded for now as a placeholder until we setup CMS */}
      <Stack spacing="50px">
        <Box>Logo placeholder</Box>
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
      <Stack>
        <Link href="/about-us" variant="footer">
          About Us
        </Link>
        <Link href="/view-machines" variant="footer">
          View Machines
        </Link>
        <Link href="/careers" variant="footer">
          Careers
        </Link>
        <Link href="/request-quote" variant="footer">
          Contact Us
        </Link>
        <Link href="/request-quote" variant="footer">
          Request a Quote
        </Link>
      </Stack>
    </SimpleGrid>
  );
};

export default Footer;
