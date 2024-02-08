"use client";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function MachineCarousel() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    swipe: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Box key={i} p={12}>
            <Card />
          </Box>
        ))}
    </Slider>
  );
}
