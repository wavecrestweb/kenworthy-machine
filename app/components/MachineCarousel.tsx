"use client";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type MouseEvent = React.MouseEventHandler<SVGElement>;

function PrevArrow(props: { className: string; onClick: MouseEvent }) {
  const { className, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      onClick={onClick}
      fontSize={"3rem"}
      borderRadius={"50%"}
      backgroundColor={"rgba(255,255,255,0.5)"}
      border={"0.5px solid"}
      borderColor={"brand.backgroundLight"}
      color={"brand.backgroundDark"}
      boxShadow={"0px 3px 3px 0px #00000040"}
      _hover={{
        color: "brand.textLight",
        boxShadow: "none",
      }}
      transitionDuration={"600ms"}
      zIndex={1}
    />
  );
}

function NextArrow(props: { className: string; onClick: MouseEvent }) {
  const { className, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      onClick={onClick}
      fontSize={"3rem"}
      borderRadius={"50%"}
      backgroundColor={"rgba(255,255,255,0.5)"}
      border={"0.5px solid"}
      borderColor={"brand.backgroundLight"}
      color={"brand.backgroundDark"}
      boxShadow={"0px 3px 3px 0px #00000040"}
      _hover={{
        color: "brand.textLight",
        boxShadow: "none",
      }}
      transitionDuration={"600ms"}
      zIndex={1}
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
    accessibility: true,
    nextArrow: (
      <NextArrow
        className={""}
        onClick={function (
          event: React.MouseEvent<SVGElement, globalThis.MouseEvent>,
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        className={""}
        onClick={function (
          event: React.MouseEvent<SVGElement, globalThis.MouseEvent>,
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
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
