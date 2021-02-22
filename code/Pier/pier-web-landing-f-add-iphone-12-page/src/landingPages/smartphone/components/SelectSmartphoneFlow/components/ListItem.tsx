import * as React from "react";

import Icon from "ui/Icon";
import { ItemContainer } from "../styles";

interface Props {
  children: any;
  onClick: () => void;
}

const ListItem: React.FC<Props> = ({ children, onClick }) => {
  const handleKeyPress = (event, onKeyPress) => {
    if (event.key === "Enter" || event.key === " ") onKeyPress();
  };

  return (
    <ItemContainer
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={(event) => handleKeyPress(event, onClick)}
    >
      {children}
      <Icon name="chevronRight" size={14} fill="primary" />
    </ItemContainer>
  );
};

export default ListItem;
