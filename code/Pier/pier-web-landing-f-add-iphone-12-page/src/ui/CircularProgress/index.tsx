import styled, { keyframes } from "styled-components";
import colors from "../theme/colors";

interface Props {
  color?: keyof typeof colors;
  bgColor?: keyof typeof colors;
  size?: number;
  borderSize?: number;
  className?: string;
}

const spinnerAnimation = keyframes`
 	100% {
  	transform: rotate(360deg)
	}
`;

const StyledSpinner = styled.div<Props>`
  pointer-events: none;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ borderSize }) => borderSize}px solid transparent;
  border-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] : "transparent"};
  border-top-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  animation: ${spinnerAnimation} 1s linear infinite;
`;

const Spinner = ({
  size = 24,
  color,
  bgColor,
  borderSize = 4,
  className,
}: Props) => {
  return (
    <StyledSpinner
      size={size}
      color={color || "white"}
      bgColor={bgColor}
      borderSize={borderSize}
      className={className}
    />
  );
};

export default Spinner;
