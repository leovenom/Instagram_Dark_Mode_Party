import * as React from "react";

import Collapse from "../../Collapse";
import { ItemProps } from "../utils/interface-props";
import Item from "./Item";

import { OptionLi, CollapseContent } from "./style";

const ItemContainer: React.FC<ItemProps> = ({
  icon,
  name,
  shortDescription,
  longDescription,
}) => {
  const hasCollapse = !!longDescription;
  const renderItem = () => (
    <Item icon={icon} name={name} shortDescription={shortDescription} />
  );

  return (
    <OptionLi hasCollapse={hasCollapse}>
      {hasCollapse ? (
        <Collapse>
          <Collapse.Title thinner>{renderItem()}</Collapse.Title>
          <Collapse.Content>
            <CollapseContent>{longDescription}</CollapseContent>
          </Collapse.Content>
        </Collapse>
      ) : (
        renderItem()
      )}
    </OptionLi>
  );
};

export default ItemContainer;
