// LIBRARY IMPORTS
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPeopleGroup,
} from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { faClock } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";

// LOCAL IMPORTS
import gearBackground from "../../public/images/machine-gear-background.png";

// DATA - TO BE REMOVED ONCE CMS IS SET UP
const values = [
  {
    heading: "Quality",
    text: "At Kenworthy Machine, producing quality parts to our customer's specifications is our most important job.",
    icon: faGears,
  },
  {
    heading: "On Time Delivery",
    text: "We strive to be a supplier that our customers can rely on.",
    icon: faClock,
  },
  {
    heading: "Collaboration",
    text: "We value our relationships with our customers.",
    icon: faPeopleGroup,
  },
];

// VALUES COMPONENT DEFINITION
export default function CompanyValues() {
  return (
    <Box>
      <VStack spacing={8}>
        <Heading color="white" textAlign="center" mb={4}>
          {"Kenworthy's Values"}
        </Heading>
        {values.map((value) => (
          <Box
            key={value.heading}
            color="white"
            p={5}
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="md"
          >
            <HStack spacing={4}>
              <Box fontSize="3xl">
                <FontAwesomeIcon icon={value.icon} />
              </Box>
              <VStack align="start">
                <Heading size="md">{value.heading}</Heading>
                <Text>{value.text}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
