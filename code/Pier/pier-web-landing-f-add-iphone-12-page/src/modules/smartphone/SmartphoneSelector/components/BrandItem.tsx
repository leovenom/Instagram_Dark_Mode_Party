import { smartphoneTracker } from "helpers/mixpanelTracker";
import { brands } from "../data";
import { BrandBox, BrandImg, BrandLabel, BrandImgArea } from "../styles";

const BrandItem = ({ selectBrand, brand }) => {
  const { label, icon } = brands[brand];
  const handleSelectBrand = () => {
    smartphoneTracker.track("ChooseBrand Item Selected", { brand });
    selectBrand(brand);
  };

  return (
    <BrandBox
      role="button"
      tabIndex={0}
      onKeyPress={handleSelectBrand}
      onClick={handleSelectBrand}
      key={brand}
    >
      <BrandImgArea>
        <BrandImg
          src={`/static_assets/images/select-smartphone-flow/${icon}`}
          alt={brand}
        />
      </BrandImgArea>
      <BrandLabel>{label}</BrandLabel>
    </BrandBox>
  );
};

export default BrandItem;
