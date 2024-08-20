import React, { FC, memo } from "react";
import Fish from "src/assets/Fish.png";

import { SButton } from "./style";
import { IProps } from "./types";

const ButtonImpl: FC<IProps> = (props) => {
  const { label } = props;

  return (
    <SButton data-label={label}>
      <img src={Fish} alt="fish" />
    </SButton>
  );
};

export const Button = memo(ButtonImpl);
