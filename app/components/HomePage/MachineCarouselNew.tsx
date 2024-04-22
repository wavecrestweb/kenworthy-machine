"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y, FreeMode } from "swiper/modules";
import "../../global.css";

import { MachineCardsBlock } from "../MachinesPage/Machines";
import Card from "../Card/Card";
import { Spacer } from "@chakra-ui/react";

type MouseEvent = React.MouseEventHandler<SVGElement>;

// function PrevArrow(props: {
//   className: string;
//   onClick: MouseEvent;
//   disabled: boolean;
// }) {
//   const { className, onClick, disabled } = props;
//   return (
//     <ChevronLeftIcon
//       className={className}
//       onClick={onClick}
//       fontSize={"3rem"}
//       borderRadius={"50%"}
//       backgroundColor={
//         disabled ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)"
//       }
//       border={"0.5px solid"}
//       borderColor={"brand.backgroundLight"}
//       color={disabled ? "brand.textLight" : "brand.primary"}
//       boxShadow={disabled ? "" : "0px 3px 3px 0px #00000040"}
//       _hover={{
//         color: disabled ? "brand.backgroundLight" : "brand.backgroundMed",
//         boxShadow: "none",
//       }}
//       transitionDuration={"600ms"}
//       zIndex={1}
//       cursor={disabled ? "not-allowed" : "pointer"}
//       pointerEvents={disabled ? "none" : "auto"}
//     />
//   );
// }

// function NextArrow(props: {
//   className: string;
//   onClick: MouseEvent;
//   disabled: boolean;
// }) {
//   const { className, onClick, disabled } = props;
//   return (
//     <ChevronRightIcon
//       className={className}
//       onClick={onClick}
//       fontSize={"3rem"}
//       borderRadius={"50%"}
//       backgroundColor={
//         disabled ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)"
//       }
//       border={"0.5px solid"}
//       borderColor={"brand.backgroundLight"}
//       color={disabled ? "brand.textLight" : "brand.primary"}
//       boxShadow={disabled ? "" : "0px 3px 3px 0px #00000040"}
//       _hover={{
//         color: disabled ? "brand.backgroundLight" : "brand.backgroundMed",
//         boxShadow: "none",
//       }}
//       transitionDuration={"600ms"}
//       zIndex={1}
//       cursor={disabled ? "not-allowed" : "pointer"}
//       pointerEvents={disabled ? "none" : "auto"}
//     />
//   );
// }

export default function MachineCarouselNew({
  machineCards,
  path,
}: {
  machineCards: MachineCardsBlock["machineCards"];
  path: string;
}): JSX.Element {
  return (
    <Swiper
      // slidesPerView={3}
      // autoHeight
      navigation
      pagination={{ clickable: true }}
      // modules={[Navigation, Pagination, A11y]}
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode, Navigation, Pagination, A11y]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      }}
    >
      {machineCards?.machineCard?.map((card, i) => {
        return (
          <SwiperSlide key={i} color={"purple"}>
            <Card key={i} {...card} path={path} />
            <Spacer padding={8} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
