import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";

export const CoverageContainer = styled.section`
  margin: 24px;

  ${breakpoints.desktop} {
    margin-top: 96px;
  }
`;

export const CoveredItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const AssistanceContainer = styled.div`
  margin-top: 56px;
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 24px;
  padding-bottom: 8px;
`;

export const CollapseContainer = styled.div`
  border-top: 1px solid ${colors.lightGray};
  margin-top: 24px;
`;

export const CollapseHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 48px;
    max-width: 48px;
    margin-right: 16px;
  }
`;

export const UncoveredContainer = styled.div`
  margin: 56px 24px 112px;
`;

export const UncoveredList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;

  > div {
    margin-bottom: 8px;
  }
`;

export const UncoveredItem = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.colors.lighterGray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: calc(100% - 24px);
  svg {
    margin-right: 12px;
    min-width: 22px;
  }
`;

export const StyledCoveredSection = styled.div`
  margin-bottom: 60px;
`;
