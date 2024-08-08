import React, { FC } from "react";
import { GlobalStyles, SContainer } from "./style";
import { Button, Animation } from "./components";

const Bootstrap: FC = () => {
  return (
    <>
      <GlobalStyles />
      <SContainer>
        <Button label="Кнопка"/>
        <Animation />
      </SContainer>
    </>
  );
};

export { Bootstrap };
