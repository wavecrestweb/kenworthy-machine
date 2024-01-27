import { Box } from "@chakra-ui/react";

const content = [
  "Our family-owned CNC production company is located in Duvall, Washington, just 30 miles northeast of the Seattle metropolitan area. Clients of Kenworthy Machine appreciate our local accessibility as well as our statewide service and delivery.",
];

const Location = () => {
  return (
    <Box
      bg="backgroundMed"
      px="4.5rem"
      py="6rem"
      textAlign={"center"}
      fontSize="5xl"
      lineHeight="3.6rem"
    >
      {content}
    </Box>
  );
};

export default Location;
