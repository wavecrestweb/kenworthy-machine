"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { PageBlocksMachineCarouselMachineCard } from "@/tina/__generated__/types";

import Card from "./Card";

type MouseEvent = React.MouseEventHandler<SVGElement>;

function PrevArrow(props: {
  className: string;
  onClick: MouseEvent;
  disabled: boolean;
}) {
  const { className, onClick, disabled } = props;
  return (
    <ChevronLeftIcon
      className={className}
      onClick={onClick}
      fontSize={"3rem"}
      borderRadius={"50%"}
      backgroundColor={
        disabled ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)"
      }
      border={"0.5px solid"}
      borderColor={"brand.backgroundLight"}
      color={disabled ? "brand.textLight" : "brand.primary"}
      boxShadow={disabled ? "" : "0px 3px 3px 0px #00000040"}
      _hover={{
        color: disabled ? "brand.backgroundLight" : "brand.backgroundMed",
        boxShadow: "none",
      }}
      transitionDuration={"600ms"}
      zIndex={1}
      cursor={disabled ? "not-allowed" : "pointer"}
      pointerEvents={disabled ? "none" : "auto"}
    />
  );
}

function NextArrow(props: {
  className: string;
  onClick: MouseEvent;
  disabled: boolean;
}) {
  const { className, onClick, disabled } = props;
  return (
    <ChevronRightIcon
      className={className}
      onClick={onClick}
      fontSize={"3rem"}
      borderRadius={"50%"}
      backgroundColor={
        disabled ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)"
      }
      border={"0.5px solid"}
      borderColor={"brand.backgroundLight"}
      color={disabled ? "brand.textLight" : "brand.primary"}
      boxShadow={disabled ? "" : "0px 3px 3px 0px #00000040"}
      _hover={{
        color: disabled ? "brand.backgroundLight" : "brand.backgroundMed",
        boxShadow: "none",
      }}
      transitionDuration={"600ms"}
      zIndex={1}
      cursor={disabled ? "not-allowed" : "pointer"}
      pointerEvents={disabled ? "none" : "auto"}
    />
  );
}

export default function MachineCarousel(
  machineCards: PageBlocksMachineCarouselMachineCard[],
) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
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
        onClick={(event) => {
          throw new Error("Function not implemented.");
        }}
        disabled={currentSlide === 7} // Hardcoded value until we can get the length of the slider
      />
    ),
    prevArrow: (
      <PrevArrow
        className={""}
        onClick={(event) => {
          throw new Error("Function not implemented.");
        }}
        disabled={currentSlide === 0}
      />
    ),
    beforeChange: (oldIndex: number, newIndex: React.SetStateAction<number>) =>
      setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Temporary filler to test Slider: repeated cards */}
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Box key={i} p={12}>
            <Card />
          </Box>
        ))}
      {/* {props.machineCard?.map((card, i) => {
        return <Card key={i} {...card}></Card>;
      })} */}
    </Slider>
  );
}
