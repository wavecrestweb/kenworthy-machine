import { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

import { PageBlocksMachineCarouselMachineCard } from "@/tina/__generated__/types";

export default function Card(props: PageBlocksMachineCarouselMachineCard) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontData = {
    image: props.image,
    name: props.name,
    type: props.type,
  };
  const backData = {
    name: props.name,
    description: props.description,
  };
  console.log("props", props);
  return (
    <>
      {isFlipped ? (
        <CardBack
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          {...backData}
        />
      ) : (
        <CardFront
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          {...frontData}
        />
      )}
    </>
  );
}
