import { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

type MachineCard = {
  __typename?: "MachinesMachineCard";
  name?: string | undefined;
  image?: string | undefined;
  description?: any;
  type?: string | undefined;
};

export default function Card(props: MachineCard): JSX.Element {
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
