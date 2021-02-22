import * as React from "react";

import Text from "../../Text";
import { CustomFilledIcon } from "../../Icon/CustomizedIcon";
import { TitleContainer } from "./style";

import { ItemProps } from "../utils/interface-props";

const Item: React.FC<ItemProps> = ({ icon, name, shortDescription }) => (
  <TitleContainer>
    <CustomFilledIcon name={icon} backgroundFill="secondary" iconFill="white" />
    <div>
      <Text variant="body" bold>
        {name}
      </Text>
      <Text variant="bodySmallest">{shortDescription}</Text>
    </div>
  </TitleContainer>
);

export default Item;
