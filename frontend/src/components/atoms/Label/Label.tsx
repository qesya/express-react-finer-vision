import React from "react";

import * as Styled from "./Label.styled";

interface Props {
  children: React.ReactNode;
}

const Label = ({ children }: Props) => (
  <Styled.Label>{children}</Styled.Label>
);

export default Label;
