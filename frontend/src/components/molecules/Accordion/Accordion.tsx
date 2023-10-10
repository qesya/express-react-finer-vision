import React from "react";

import * as Styled from "./Accordion.styled";
import { Button } from "../../atoms";

interface Props {
  isOpen?: boolean;
  width?: string;
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  onSubmit: () => void;
}

const Accordion = ({
  isOpen = false,
  width = "800px",
  title,
  children,
  onClick,
  onSubmit,
}: Props) => (
  <Styled.Wrapper width={width}>
    <Styled.Content open={isOpen}>
      <Styled.Header onClick={onClick}>{title}</Styled.Header>
      <div>
        {children}
        <Button onClick={onSubmit}>Next {">"}</Button>
      </div>
    </Styled.Content>
  </Styled.Wrapper>
);

export default Accordion;
