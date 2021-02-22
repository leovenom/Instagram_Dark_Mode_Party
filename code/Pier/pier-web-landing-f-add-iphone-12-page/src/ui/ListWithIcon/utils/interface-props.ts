import { customFilledIcons } from "ui/Icon/customizedIcons";

export interface ItemProps {
  id?: number;
  icon?: keyof typeof customFilledIcons;
  name: string;
  shortDescription?: string;
  longDescription?: string;
}

export interface ListwithIconProps {
  items: ItemProps[];
  isFullWidth?: boolean;
}
