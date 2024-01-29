// LIBRARY IMPORTS
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPeopleGroup,
} from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { faClock } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";

// LOCAL IMPORTS
import gearBackground from "../../public/images/machine-gear-background.png";

// VALUES COMPONENT DEFINITION
export default function CompanyValues() {
  return (
    <Box bg="brand.backgroundDark" p={10}>
      <VStack spacing={8} align="stretch">
        <Heading color="white" textAlign="center" mb={4}>
          {"Kenworthy's Values"}
        </Heading>
        <Box bg="white" color="brand.text">
          <Box p={5} borderRadius="md">
            <HStack spacing={4}>
              <Box fontSize="3xl">
                <FontAwesomeIcon icon={faGears} />
              </Box>
              <VStack align="start">
                <Heading size="md">Quality</Heading>
                <Text>
                  {
                    "At Kenworthy Machine, producing quality parts to our customer's specifications is our most important job."
                  }
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box p={5} borderRadius="md">
            <HStack spacing={4}>
              <Box fontSize="3xl">
                <FontAwesomeIcon icon={faClock} />
              </Box>
              <VStack align="start">
                <Heading size="md">On Time Delivery</Heading>
                <Text>
                  We strive to be a supplier that our customers can rely on.
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box p={5} borderRadius="md">
            <HStack spacing={4}>
              <Box fontSize="3xl" color="button">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </Box>
              <VStack align="start">
                <Heading size="md">Collaboration</Heading>
                <Text>We value our relationships with our customers.</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
