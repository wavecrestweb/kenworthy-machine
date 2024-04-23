"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y, FreeMode } from "swiper/modules";
import "../../global.css";

import { MachineCardsBlock } from "../MachinesPage/Machines";
import Card from "../Card/Card";
import { Spacer } from "@chakra-ui/react";

export default function MachineCarouselNew({
  machineCards,
  path,
}: {
  machineCards: MachineCardsBlock["machineCards"];
  path: string;
}): JSX.Element {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode, Navigation, Pagination, A11y]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {machineCards?.machineCard?.map((card, i) => {
        return (
          <SwiperSlide key={i}>
            <Card key={i} {...card} path={path} />
            <Spacer padding={8} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
