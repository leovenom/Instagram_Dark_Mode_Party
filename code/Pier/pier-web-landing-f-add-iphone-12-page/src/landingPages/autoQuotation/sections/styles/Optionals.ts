import styled from "styled-components";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";

export const Section = styled.section`
  grid-area: optionals;
  padding: 60px 24px;
  border-bottom: 8px solid ${colors.gray200};

  ${breakpoints.custom(930)} {
    padding: 60px 0;
    margin: 0;
  }
`;

export const OptionalContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;

  ${breakpoints.custom(930)} {
    svg {
      margin-top: 8px;
    }
  }
`;

export const OptionalContent = styled.div`
  display: grid;
  grid-template-areas:
    "title switch"
    "label price"
    "description description";
  row-gap: 16px;

  ${breakpoints.custom(930)} {
    grid-template-columns: 1fr auto auto;
    align-items: center;
    grid-template-areas:
      "title price switch"
      "description . .";
    column-gap: 16px;
    row-gap: 8px;
  }
`;

export const OptionalTitle = styled(Text)`
  grid-area: title;
`;

export const OptionalSwitchContainer = styled.div`
  grid-area: switch;
  justify-self: end;
`;

export const OptionalAddLabel = styled(Text)`
  grid-area: label;

  ${breakpoints.desktop} {
    display: none;
  }
`;

export const OptionalPrice = styled(Text)`
  grid-area: price;
  justify-self: end;
`;

export const OptionalDescription = styled(Text)`
  grid-area: description;
`;
