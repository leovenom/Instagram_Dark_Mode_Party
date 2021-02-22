import styled, { css } from "styled-components";

export type BannerVariants = "error" | "warning" | "success";

const Banner = styled.div<{ variant: string; fullWidth?: boolean }>`
  background: ${({ variant, theme }) => {
    if (variant === "error") return theme.colors.lightRed;

    if (variant === "warning") return theme.colors.lightYellow;

    return theme.colors.lightGreen;
  }};
  border-radius: 4px;

  padding: 16px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  max-width: 327px;
  display: flex;
  align-items: center;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: 100%;
      width: calc(100% -32px);
      border-radius: 4px 4px 0 0;
    `}
`;

export default Banner;
