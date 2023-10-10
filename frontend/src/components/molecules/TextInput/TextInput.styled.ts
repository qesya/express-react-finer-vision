import styled from "styled-components";

export const Wrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "auto"};
`;

export const TextInput = styled.input`
  background-color: ${({ theme }) => theme.white};
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 10px;
  line-height: 2.5;
  padding: 0 15px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
