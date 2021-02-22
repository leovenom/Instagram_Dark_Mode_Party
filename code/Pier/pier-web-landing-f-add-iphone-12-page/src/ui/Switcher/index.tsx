import styled, { css } from "styled-components";

const SwitcherContainer = styled.div<{ isEnabled: boolean }>`
  cursor: pointer;
  outline: 0;
  height: 32px;
  width: 71px;
  border-radius: 32px;
  padding: 3px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: all 250ms;

  ${({ isEnabled }) =>
    isEnabled
      ? css`
          background-color: ${({ theme }) => theme.colors.green600};
          flex-direction: row-reverse;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray400};
          flex-direction: row;
        `}
`;

const SwitcherButton = styled.button`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: 0;
`;

const SwitcherLabel = styled.span<{ isEnabled: boolean }>`
  font-weight: bold;
  padding: 0 6px;
  transition: all 250ms;
  color: ${({ theme, isEnabled }) =>
    isEnabled ? theme.colors.primary : theme.colors.gray600};
`;

interface Props {
  checked: boolean;
  toggle: () => void;
  hasLabel?: boolean;
  disabled?: boolean;
}

function Switcher({ checked, toggle, hasLabel, disabled }: Props) {
  const handleClick = () => {
    if (!disabled) {
      toggle();
    }
  };

  return (
    <SwitcherContainer
      isEnabled={checked}
      aria-checked={checked}
      role="switch"
      tabIndex={0}
      onClick={handleClick}
    >
      <SwitcherButton data-testid="switch-button" />
      {hasLabel && (
        <SwitcherLabel isEnabled={checked}>
          {checked ? "Sim" : "Não"}
        </SwitcherLabel>
      )}
    </SwitcherContainer>
  );
}

export default Switcher;
