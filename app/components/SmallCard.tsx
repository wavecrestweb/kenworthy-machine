import { Maybe } from "@/tina/__generated__/types";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import Image from "next/image";

type SmallCardProps = {
  header: Maybe<string> | undefined;
  body: Maybe<string> | undefined;
  image: any;
  alt: string;
  repositioned: boolean;
};

export default function SmallCard({
  header,
  body,
  image,
  alt,
  repositioned,
}: SmallCardProps) {
  return (
    <Card
      w={"342px"}
      h={"336px"}
      color={"white"}
      backgroundColor={"brand.primary"}
      align={"center"}
      borderRadius={"1.875rem"}
      position={{ base: "static", lg: repositioned ? "relative" : "static" }}
      bottom={{ base: "0", lg: repositioned ? "100" : "0" }}
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
