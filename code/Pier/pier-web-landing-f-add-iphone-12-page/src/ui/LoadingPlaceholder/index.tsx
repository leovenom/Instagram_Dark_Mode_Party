import styled, { css, keyframes } from "styled-components";

import colors from "ui/theme/colors";

const loading = keyframes`
  0% {
    background: ${colors.gray400};
  }
  25% {
    background: ${colors.gray200};
  }
  75% {
    background: ${colors.gray200};
  }
  100% {
    background: ${colors.gray400};
  }
`;

const LoadingPlaceholderComponent = styled.span<{
  width: string;
  height: string;
  margins?: string;
}>`
  ${({ width, height, margins }) => css`
    height: ${height};
    width: ${width};
    margin: ${margins ? margins : "0"};
  `}
  background: ${colors.gray400};
  display: inline-block;

  animation: ${loading} 1000ms ease-in-out infinite;
`;

interface Props {
  width: string;
  height: string;
  margins?: string;
}

function LoadingPlaceholder({ width, height, margins }: Props) {
  return (
    <LoadingPlaceholderComponent
      width={width}
      height={height}
      margins={margins}
    />
  );
}

export default LoadingPlaceholder;
