"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

import { MachineCardsBlock } from "../MachinesPage/Machines";
import Card from "../Card/Card";

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
    <Swiper slidesPerView={3} navigation={true} modules={[Navigation]}>
      {machineCards?.machineCard?.map((card, i) => {
        return (
          <SwiperSlide key={i}>
            <Card key={i} {...card} path={path} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
