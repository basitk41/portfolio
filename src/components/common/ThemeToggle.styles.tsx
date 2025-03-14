import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: var(--bg-alternate);
  border: 2px solid var(--border);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  position: relative;
  width: 4.5rem;
  height: 2.2rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

export interface IconProps {
  theme: string;
}

export const Icons = styled.div<IconProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    transition: all 0.3s ease;
    color: var(--text-secondary);

    &:first-child {
      color: ${({ theme }) =>
        theme === "light" ? "var(--primary)" : "var(--text-secondary)"};
    }

    &:last-child {
      color: ${({ theme }) =>
        theme === "dark" ? "var(--primary)" : "var(--text-secondary)"};
    }
  }
`;

export const ToggleThumb = styled.div<{ isLight: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isLight }) => (isLight ? "2px" : "calc(100% - 1.7rem)")};
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: var(--bg-primary);
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
