import { useState } from "react";
import { keyframes } from "@chakra-ui/react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

export type MachineCard = {
  __typename?: "MachinesMachineCard";
  name?: string;
  image?: string;
  description?: any;
  type?: string;
  path: string;
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
          setIsFlipped={setIsFlipped}
          animation={animation}
          {...props}
        />
      ) : (
        <CardFront
          setIsFlipped={setIsFlipped}
          animation={animation}
          {...props}
        />
      )}
    </>
  );
}
