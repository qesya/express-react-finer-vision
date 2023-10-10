import { ChangeEvent } from "react";

import * as Styled from "./Textarea.styled";
import { Label } from "../../atoms";

interface Props {
  label?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
}

const Textarea = ({ label, value, onChange, width }: Props) => (
  <Styled.Wrapper width={width}>
    {label !== null && <Label>{label}</Label>}
    <Styled.Textarea rows={4} value={value} onChange={onChange} />
  </Styled.Wrapper>
);

export default Textarea;
