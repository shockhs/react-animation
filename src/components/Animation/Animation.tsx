import React, { FC, memo } from "react";
import Pond from "src/assets/Pond.png";
import Fish from "src/assets/Fish.png";

import { IProps } from "./types";
import { SContainer, SBackground, SAnimatedFish } from "./style";

const AnimationImpl: FC<IProps> = () => {
  return (
    <SContainer>
      <SBackground src={Pond} />
      <SAnimatedFish src={Fish} />
    </SContainer>
  );
};

export const Animation = memo(AnimationImpl);
