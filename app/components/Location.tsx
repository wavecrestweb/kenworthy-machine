import { Box } from "@chakra-ui/react";

const content = [
  "Our family-owned CNC production company is located in Duvall, Washington, just 30 miles northeast of the Seattle metropolitan area. Clients of Kenworthy Machine appreciate our local accessibility as well as our statewide service and delivery.",
];

const Location = () => {
  return (
    <Box
      as="p"
      layerStyle="medBg"
      fontSize={{ base: "xl", xl: "3xl" }}
      fontWeight="bold"
      lineHeight={{ base: "7", xl: "10" }}
      p={{ base: "3.125rem 2.5rem", xl: "8rem 4.5rem" }}
      textAlign={"center"}
    >
      {content}
    </Box>
  );
};

export default Location;
