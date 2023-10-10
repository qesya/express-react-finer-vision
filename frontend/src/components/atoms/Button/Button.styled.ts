import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(
    ${({ theme }) => theme.purple2},
    ${({ theme }) => theme.purple1}
  );
  color: ${({ theme }) => theme.white};
  padding: 10px;
  border: none;
  border-radius: 10px;
  min-width: 120px;
  font-weight: bolder;
  cursor: pointer;
`;
