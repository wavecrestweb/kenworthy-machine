import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function SmallCard({
  header,
  body,
  image,
  alt,
  repositioned,
}: {
  header: string;
  body: string;
  image: string;
  alt: string;
  repositioned?: boolean;
}) {
  return (
    <Card
      w={"342px"}
      h={"336px"}
      color={"white"}
      backgroundColor={"brand.primary"}
      align={"center"}
      borderRadius={"1.875rem"}
      position={{ base: "static", md: repositioned ? "relative" : "static" }}
      bottom={{ base: "0", md: repositioned ? "100" : "0" }}
    >
      <CardHeader>
        <Text fontSize="32px">{header}</Text>
      </CardHeader>
      <Image src={image} width={100} alt={alt} />
      <CardBody>
        <Text fontSize="20px" align={"center"}>
          {body}
        </Text>
      </CardBody>
    </Card>
  );
}
