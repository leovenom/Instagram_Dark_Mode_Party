import Text from "ui/Text";
import data from "../data";

import { ImgWoman } from "../styles";

const SamePrice = () => (
  <>
    <ImgWoman
      src={data.samePrice.imageSrc}
      alt={data.samePrice.imageDescription}
    />
    <Text
      variant="tag"
      bold
      transform="uppercase"
      align="center"
      color="primary400"
      mb={10}
    >
      {data.samePrice.title}
    </Text>
    <Text variant="bodySmall" align="center" color="gray600">
      {data.samePrice.description}
    </Text>
  </>
);

export default SamePrice;
