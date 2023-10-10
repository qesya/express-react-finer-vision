import { ChangeEvent } from "react";

import * as Styled from "./TextInput.styled";
import { Label } from "../../atoms";

interface Props {
  label?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const TextInput = ({ label, value, onChange, width }: Props) => (
  <Styled.Wrapper width={width}>
    {label !== null && <Label>{label}</Label>}
    <Styled.TextInput type="text" value={value} onChange={onChange} />
  </Styled.Wrapper>
);

export default TextInput;
