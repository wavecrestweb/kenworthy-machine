import { Box } from "@chakra-ui/react";

const content = [
  "Our family-owned CNC production company is located in Duvall, Washington, just 30 miles northeast of the Seattle metropolitan area. Clients of Kenworthy Machine appreciate our local accessibility as well as our statewide service and delivery.",
];

const Location = () => {
  return (
    <Box
      as="p"
      bg="brand.backgroundMed"
      fontSize={{ lg: "5xl", sm: "2rem" }}
      lineHeight={{ lg: "3.6rem", sm: "2.4rem" }}
      p={{ lg: "8rem 4.5rem", sm: "3.125rem 2.5rem" }}
      textAlign={"center"}
    >
      {content}
    </Box>
  );
};

export default Location;
