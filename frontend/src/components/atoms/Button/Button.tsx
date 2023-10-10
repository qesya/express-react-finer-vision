import React from "react";

import * as Styled from "./Button.styled";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => (
  <Styled.Button type="button" onClick={onClick}>
    {children}
  </Styled.Button>
);

export default Button;
