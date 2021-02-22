import styles from "./styles";
import colors from "./colors";
import spacings from "./spacings";

export interface Theme {
  styles: any;
  colors: { [C in keyof typeof colors]: string };
  spacings: { [key: string]: number };
}

const theme: Theme = {
  styles,
  colors,
  spacings,
};

export default theme;
