import styled from "styled-components";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;

  & > div:not(:first-child) {
    margin-left: 20px;
  }
`;
