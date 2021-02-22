import * as React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import CustomizedIcon from "../Icon/CustomizedIcon";

type variants = "checked" | "unchecked";
interface Props {
  text: string;
  variant: variants;
  mb?: number;
}

const Content = styled.div<{ mb?: number }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ mb }) => mb || 24}px;

  svg {
    min-width: 20px;
  }
`;

const TextStyle = styled.span`
  margin-left: 16px;

  font-size: 15px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const renderIcon = (variant: variants) =>
  variant === "checked" ? (
    <CustomizedIcon name="checkedGreen" />
  ) : (
    <Icon name="ban" fill="darkGray" size={20} />
  );

const BulletPoint: React.FunctionComponent<Props> = ({
  text,
  variant,
  mb,
}): JSX.Element => (
  <Content mb={mb}>
    {renderIcon(variant)}
    <TextStyle>{text}</TextStyle>
  </Content>
);

export default BulletPoint;
