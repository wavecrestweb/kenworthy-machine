"use client";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";

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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Slider>
  );
}
