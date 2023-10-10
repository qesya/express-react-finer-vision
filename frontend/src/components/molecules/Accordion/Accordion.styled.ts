import styled from "styled-components";

export const Wrapper = styled.div<{ width?: string }>`
  background-color: ${({ theme }) => theme.white};
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 10px;
  transition: 0.4s;
`;

export const Header = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.yellow1},
    ${({ theme }) => theme.yellow2}
  );
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 20px 14px;
  color: ${({ theme }) => theme.white};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const Content = styled.div<{ open: boolean }>`
  background-color: ${({ theme }) => theme.gray1};
  border-radius: 10px;

  & > div:nth-child(2) {
    ${({ open }) =>
      open
        ? `
        display: flex;
        flex-direction: column;
      `
        : `display: none;`}
    padding: 20px 14px;
    transition: 0.4s;

    & > button {
      align-self: flex-end;
    }

    & > div:not(:first-child) {
      margin-top: 8px;
    }
  }
`;
