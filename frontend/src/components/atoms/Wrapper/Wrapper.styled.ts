import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.slate1};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  transition: 0.4s;
`;
