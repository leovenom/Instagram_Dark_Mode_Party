import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "ui/Button";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";
import { HEADER_HEIGHT } from "ui/Header/styles";

export const CardContainer = styled.aside`
  grid-area: card;
  background: ${colors.gray200};
  box-sizing: border-box;
  padding: 40px 24px;

  ${breakpoints.custom(930)} {
    position: sticky;
    top: ${HEADER_HEIGHT}px;
    height: calc(100vh - 80px);
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled(Text)`
  line-height: 48px;

  span {
    font-size: 48px;
  }
`;

export const Details = styled(motion.div)<{ mb?: number }>`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  ${({ mb }) => {
    if (mb) {
      return `
            margin-bottom: ${mb}px;
          `;
    }
    return null;
  }}
`;

export const UpdatePriceButton = styled.button`
  display: flex;
  align-items: center;
  margin: 32px 0 24px;
  text-align: left;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const QuoteAgainButton = styled(Button)`
  color: ${colors.secondary};
`;

export const BannerContainer = styled.div`
  background: ${({ theme }) => theme.colors.warning};
  margin: -40px -24px 16px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    min-width: 24px;
  }
`;
