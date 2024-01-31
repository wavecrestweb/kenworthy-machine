// LIBRARY IMPORTS
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaRegClock, FaPeopleGroup, FaRegStar } from "react-icons/fa6";

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
        <VStack spacing={8}>
          <Heading color="white" textAlign="center" mb={4}>
            {"Kenworthy's Values"}
          </Heading>
          <VStack
            maxW="1400px"
            bg="white"
            borderRadius="2xl"
            px={32}
            py={24}
            spacing={36}
          >
            {/* QUALITY VALUE CONTAINER */}
            <HStack spacing={12} align="center">
              <VStack align="start" spacing={4}>
                <Heading size="lg">Quality</Heading>
                <Box
                  bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                  w="full"
                  h={1}
                ></Box>
                <Text fontWeight="bold" fontSize="lg">
                  {
                    "At Kenworthy Machine, producing quality parts to our customer's specifications is our most important job."
                  }
                </Text>
                <Text fontSize="lg">
                  {
                    "Our team is dedicated to making sure your parts are correct an in tolerance every time. They use their expertise, as well as modern inspection equipment to achieve this goal. Upon request we can provide inspection reports for your parts with detailed measurements compared to drawing specifications. We also offer laser engraving to give your parts a professional appearance."
                  }
                </Text>
              </VStack>
              <Spacer />
              <Flex
                w={28}
                h={28}
                bg="brand.backgroundDark"
                borderRadius="2xl"
                align="center"
                justify="center"
              >
                <Icon as={FaRegStar} w={24} h={24} color="white" />
              </Flex>
            </HStack>
            {/* ON-TIME VALUE CONTAINER */}
            <HStack spacing={12} align="center">
              <Flex
                w={32}
                h={32}
                bg="brand.backgroundDark"
                borderRadius="2xl"
                align="center"
                justify="center"
              >
                <Icon as={FaRegClock} w={28} h={28} color="white" />
              </Flex>
              <Spacer />
              <VStack align="start" spacing={4}>
                <Heading size="lg">On Time Delivery</Heading>
                <Box
                  bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                  w="full"
                  h={1}
                ></Box>
                <Text fontWeight="bold" fontSize="lg">
                  We strive to be a supplier that our customers can rely on.
                </Text>
                <Text fontSize="lg">
                  We use a modern ERP system to accurately schedule our shop so
                  that we give our customers accurate delivery date commitments.
                </Text>
              </VStack>
            </HStack>
            {/* COLLABORATION VALUE CONTAINER */}
            <HStack spacing={12} align="center">
              <VStack align="start" spacing={4}>
                <Heading size="lg">Collaboration</Heading>
                <Box
                  bgGradient="linear(90deg, #DB0A40 0%, rgba(219, 10, 64, 0.04) 96%, rgba(219, 10, 64, 0) 100%)"
                  w="full"
                  h={1}
                ></Box>
                <Text fontWeight="bold" fontSize="lg">
                  We value our relationships with our customers.
                </Text>
                <Text fontSize="lg">
                  It is important that we partner with them to give the best
                  possible value. Let us work with your engineering and design
                  teams to maximize value. Often our expert machining team is
                  able to provide feedback from a manufacturing perspective that
                  reduces costs while retaining functionality.
                </Text>
              </VStack>
              <Spacer />
              <Flex
                w={32}
                h={32}
                bg="brand.backgroundDark"
                borderRadius="2xl"
                align="center"
                justify="center"
              >
                <Icon as={FaPeopleGroup} w={28} h={28} color="white" />
              </Flex>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
