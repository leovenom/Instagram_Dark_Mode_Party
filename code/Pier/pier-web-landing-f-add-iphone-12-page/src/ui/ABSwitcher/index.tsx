import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import colors from "ui/theme/colors";

const SwitcherButton = styled.button<{ on: boolean }>`
  position: relative;
  width: 68px;
  height: 36px;
  border: none;
  outline: 0;
  border-radius: 32px;
  cursor: pointer;

  background: ${colors.gray400};
  transition: background 250ms ease-in-out;

  ${({ on }) =>
    on &&
    css`
      background: ${colors.success};
    `}

  span {
    font-size: 11px;
    line-height: 16px;
    font-weight: bold;
    position: absolute;
    top: 11px;
  }

  .switcher-control {
    position: absolute;
    top: 4px;
    width: 28px;
    height: 28px;
    background: white;
    box-shadow: 0px 0px 4px rgba(35, 38, 59, 0.2);
    border-radius: 50%;
  }
`;

interface Props {
  getAnimationState: (switcherState: boolean) => "on" | "off";
  switcherState: boolean;
  toggle: () => void;
}

function Switcher({ getAnimationState, switcherState, toggle }: Props) {
  return (
    <SwitcherButton on={switcherState} onClick={toggle}>
      <motion.span
        animate={getAnimationState(switcherState)}
        variants={{
          off: { x: 3, color: colors.primary },
          on: { x: -26, color: colors.white },
        }}
      >
        {switcherState ? "SIM" : "NÃO"}
      </motion.span>
      <motion.span
        className="switcher-control"
        animate={getAnimationState(switcherState)}
        variants={{
          off: { x: -30 },
          on: { x: 2 },
        }}
      />
    </SwitcherButton>
  );
}

export default Switcher;
