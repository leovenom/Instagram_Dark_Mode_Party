import styled from "styled-components";
import OrderedLIst from "ui/OrderedList";
import UnorderedList from "ui/UnorderedList";
import { default as DefaultExternalLink } from "ui/ExternalLink";

export const ExternalLink = styled(DefaultExternalLink)`
  font-size: 18px;
  line-height: 24px;
`;

export const Item = styled.div`
  padding-bottom: 56px;
`;

export const ItemTitle = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  padding: 0;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: left;

  margin-bottom: 16px;
`;

export const StyledOrderedList = styled(OrderedLIst)`
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 10px;

  li {
    line-height: 1.8;
  }
`;

export const StyledUnorderedList = styled(UnorderedList)`
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 10px;

  li {
    line-height: 1.8;
  }
`;
