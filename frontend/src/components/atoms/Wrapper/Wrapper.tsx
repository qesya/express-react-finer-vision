import React from "react";

import * as Styled from "./Wrapper.styled";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);

export default Wrapper;
