// LIBRARY IMPORTS
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/index";
import {
  faClock,
  faStar,
} from "@/node_modules/@fortawesome/free-regular-svg-icons/index";

// LOCAL IMPORTS
import gearBackground from "../../public/images/machine-gear-background.png";

// VALUES COMPONENT DEFINITION
export default function CompanyValues() {
  return (
    <>
      <Image
        src={gearBackground}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        bgImage={gearBackground}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={10}
        bg="brand.backgroundDark"
        opacity="90%"
      >
        <VStack spacing={8} align="stretch">
          <Heading color="white" textAlign="center" mb={4}>
            {"Kenworthy's Values"}
          </Heading>
          <VStack bg="white" borderRadius="2xl" px={32} py={24} spacing={36}>
            <Box>
              <HStack spacing={4} align="left">
                <VStack align="start">
                  <Heading size="md">Quality</Heading>
                  <Divider color="brand.button" />
                  <Text>
                    <p>
                      {
                        "At Kenworthy Machine, producing quality parts to our customer's specifications is our most important job."
                      }
                    </p>
                    <p>
                      {
                        "Our team is dedicated to making sure your parts are correct an in tolerance every time. They use their expertise, as well as modern inspection equipment to achieve this goal. Upon request we can provide inspection reports for your parts with detailed measurements compared to drawing specifications. We also offer laser engraving to give your parts a professional appearance."
                      }
                    </p>
                  </Text>
                </VStack>
                <Box fontSize="3xl">
                  <FontAwesomeIcon icon={faStar} />
                </Box>
              </HStack>
            </Box>
            <Box>
              <HStack spacing={4} align="right">
                <Box fontSize="3xl">
                  <FontAwesomeIcon icon={faClock} />
                </Box>
                <VStack align="start">
                  <Heading size="md">On Time Delivery</Heading>
                  <Divider color="brand.button" />
                  <Text>
                    <p>
                      We strive to be a supplier that our customers can rely on.
                    </p>
                    <p>
                      We use a modern ERP system to accurately schedule our shop
                      so that we give our customers accurate delivery date
                      commitments.
                    </p>
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <HStack spacing={4} align="left">
                <VStack align="start">
                  <Heading size="md">Collaboration</Heading>
                  <Divider color="brand.button" />
                  <Text>
                    <p>We value our relationships with our customers.</p>
                    <p>
                      It is important that we partner with them to give the best
                      possible value. Let us work with your engineering and
                      design teams to maximize value. Often our expert machining
                      team is able to provide feedback from a manufacturing
                      perspective that reduces costs while retaining
                      functionality.
                    </p>
                  </Text>
                </VStack>
                <Box fontSize="3xl" color="button">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </Box>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
