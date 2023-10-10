import React from "react";

import * as Styled from "./RowWrapper.styled";

interface Props {
  children: React.ReactNode;
}

const RowWrapper = ({ children }: Props) => (
  <Styled.RowWrapper>{children}</Styled.RowWrapper>
);

export default RowWrapper;
