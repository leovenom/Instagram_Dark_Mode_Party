import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";

export const List = styled.ul`
  list-style: none;
  display: grid;
  margin: 0;
  padding: 0;

  grid-template-rows: auto;

  column-gap: 40px;
  row-gap: 40px;

  grid-template-columns: auto;

  > div {
    display: none;
  }
  ${breakpoints.custom(930)} {
    grid-template-columns: 1fr 1fr;

    > div {
      display: block;
    }
  }
`;

export const ListItem = styled.li<{ hideOnMobile: boolean }>`
  display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "flex")};

  ${breakpoints.custom(930)} {
    display: flex;
  }
`;

export const ListIconContainer = styled.div`
  margin-right: 24px;
`;

export const ListContent = styled.div``;

export const MobileButton = styled(Button)`
  width: 100%;
  max-width: 400px;
  margin-top: 24px;

  ${breakpoints.custom(930)} {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
