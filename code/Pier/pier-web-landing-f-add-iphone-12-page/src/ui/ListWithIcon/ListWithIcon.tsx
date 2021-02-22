import * as React from "react";

import ItemContainer from "./components/ItemContainer";
import { ListwithIconProps } from "./utils/interface-props";

import { ItensList } from "./style";

const ListWithIcon: React.FC<ListwithIconProps> = ({
  isFullWidth = true,
  items = [],
}) => {
  return (
    <ItensList isFullWidth={isFullWidth}>
      {items.map((item, i) => {
        return (
          <ItemContainer
            key={item.id}
            name={item.name}
            icon={item.icon}
            shortDescription={item.shortDescription}
            longDescription={item.longDescription}
          />
        );
      })}
    </ItensList>
  );
};

export default ListWithIcon;
