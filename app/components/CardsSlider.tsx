"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";

const titles = [
  {
    key: "1",
    title: "ONE",
    bulletPoints: [
      "CNC horizontal machining",
      "center102-station ATC",
      "8-station pallet shuttle station",
    ],
  },
  { key: "2", title: "TWO", bulletPoints: ["CNC vertical machining center"] },
  {
    key: "3",
    title: "THREE",
    bulletPoints: ["Semi-automatic horizontal bandsaw"],
  },
  {
    key: "4",
    title: "FOUR",
    bulletPoints: ["ZSED50PZ", "50 kw laser engraver"],
  },
  {
    key: "5",
    title: "FIVE",
    bulletPoints: ["Image Dimension measuring system"],
  },
  { key: "6", title: "SIX", bulletPoints: ["CNC lathe"] },
  { key: "7", title: "SEVEN", bulletPoints: ["CNC vertical machining center"] },
  { key: "8", title: "EIGHT", bulletPoints: ["RENISHAW PH10T probe"] },
];

export default function CardsSlider() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    accessibility: true,
  };
  return (
    <Slider {...settings}>
      {titles.map(({ key, title, bulletPoints }) => (
        <Box key={key} minW="100px">
          <Text fontSize="5xl">{title}</Text>
          <UnorderedList>
            {bulletPoints.map((bulletPoint, index) => (
              <ListItem key={index}>
                <Text key={index}>{bulletPoint}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </Slider>
  );
}
