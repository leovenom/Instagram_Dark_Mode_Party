import * as React from "react";
import colors from "../theme/colors";
import customizedIcons, { customFilledIcons } from "./customizedIcons";

export interface IconProps {
  name: keyof typeof customizedIcons;
}

const Icon: React.FC<IconProps> = ({ name }): JSX.Element => {
  const icon = customizedIcons[name];

  return icon;
};

interface CustomProps {
  [propName: string]: keyof typeof colors;
}
interface CustomFilledIconProps {
  name: keyof typeof customFilledIcons;
  width?: number;
  height?: number;
}

export function CustomFilledIcon({
  name,
  ...props
}: CustomFilledIconProps | CustomProps) {
  return customFilledIcons[name](props);
}

export default Icon;
