import React from "react";

import * as Styled from "./AccordionWrapper.styled";

interface Props {
  children: React.ReactNode;
}

const AccordionWrapper = ({ children }: Props) => (
  <Styled.AccordionWrapper>{children}</Styled.AccordionWrapper>
);

export default AccordionWrapper;
