import { useState } from "react";
import { keyframes } from "@chakra-ui/react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

type MachineCard = {
  __typename?: "MachinesMachineCard";
  name?: string | undefined;
  image?: string | undefined;
  description?: any;
  type?: string | undefined;
};

const animationKeyFrames = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const animation = `${animationKeyFrames} 600ms ease-out`;

export default function Card(props: MachineCard): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {isFlipped ? (
        <CardBack
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          animation={animation}
          {...props}
        />
      ) : (
        <CardFront
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          animation={animation}
          {...props}
        />
      )}
    </>
  );
}
