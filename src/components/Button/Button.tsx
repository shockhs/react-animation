import React, { FC, memo } from "react";
import { SButton } from "./style";
import { IProps } from "./types";

const ButtonImpl: FC<IProps> = (props) => {
  const { label } = props;

  return <SButton data-label={label}>{label}</SButton>;
};

export const Button = memo(ButtonImpl);
