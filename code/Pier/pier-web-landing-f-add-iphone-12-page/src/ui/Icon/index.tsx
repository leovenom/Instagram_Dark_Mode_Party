import * as React from "react";
import colors from "../theme/colors";
import spacings from "../theme/spacings";
import icons from "./icons";

export interface IconProps {
  name: keyof typeof icons;
  size?: number;
  width?: number;
  height?: number;
  fill: keyof typeof colors;
  style?: { [key: string]: string };
  onClick?: () => void;
  stroke?: number;
  className?: string;
  testId?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = spacings.MEGA,
  width,
  height,
  fill = "text",
  style,
  onClick,
  stroke,
  className,
  testId,
}): JSX.Element => {
  const { viewBox, d } = icons[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || size}
      height={height || size}
      viewBox={viewBox}
      fill={colors[fill]}
      style={style}
      onClick={onClick}
      className={className}
      data-testid={testId}
    >
      <path d={d} stroke={stroke && colors[fill]} strokeWidth={stroke} />
    </svg>
  );
};

export default Icon;
