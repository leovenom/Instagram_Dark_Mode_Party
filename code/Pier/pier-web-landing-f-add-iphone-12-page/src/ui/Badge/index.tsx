import * as React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import icons from "../Icon/icons";

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;

  div: first-of-type {
    margin-right: 8px;
  }
`;

const Content = styled.div`
  flex-grow: 2;
`;

interface Props {
  icon: keyof typeof icons;
  children: React.ReactNode;
}

function Badge({ icon, children }: Props): JSX.Element {
  return (
    <BadgeContainer>
      <div>
        <Icon fill="secondary" name={icon} size={22} />
      </div>
      <Content>{children}</Content>
    </BadgeContainer>
  );
}

export default Badge;
