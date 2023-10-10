import { ChangeEvent } from "react";

import * as Styled from "./Select.styled";
import { Label } from "../../atoms";

interface Props {
  label?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  width?: string;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const Select = ({ label, value, options = [], onChange, width }: Props) => (
  <Styled.Wrapper width={width}>
    {label !== null && <Label>{label}</Label>}
    <Styled.Select value={value} onChange={onChange}>
      <Styled.Option value="">-</Styled.Option>
      {options.map((option) => (
        <Styled.Option key={option.value} value={option.value}>
          {option.label}
        </Styled.Option>
      ))}
    </Styled.Select>
  </Styled.Wrapper>
);

export default Select;
