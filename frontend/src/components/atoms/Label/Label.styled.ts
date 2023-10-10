import styled from "styled-components";

export const Label = styled.label`
  font-weight: bolder;
  color: ${({ theme }) => theme.black};
  text-wrap: nowrap;
  line-height: 2;
`;
