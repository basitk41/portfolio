import styled from "styled-components";

enum Language {
  EN = "en",
  DE = "de",
}

export const languages: { code: Language; name: string }[] = [
  { code: Language.EN, name: "English" },
  { code: Language.DE, name: "Deutsch" },
];

export const Container = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-alternate);
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: var(--bg-highlight);
    outline: none;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
`;

export const ChevronIcon = styled(Icon)<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const Dropdown = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 10;

  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: var(--bg-highlight);
  }

  &[aria-selected="true"] {
    background: var(--bg-highlight);
    font-weight: 600;
    color: var(--primary);
  }
`;
