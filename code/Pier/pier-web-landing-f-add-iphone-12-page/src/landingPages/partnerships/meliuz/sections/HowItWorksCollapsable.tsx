import HowItWorks from "landingPages/sharedSections/HowItWorks";

import data from "../data";

interface PlanValues {
  insuredValue: string;
  price: string;
}

const HowItWorksCollapsable = () => {
  return (
    <HowItWorks
      title={data.howItWorks.title}
      descriptionItems={data.howItWorks.descriptionItems}
      imageSource={data.howItWorks.imageSource}
    />
  );
};

HowItWorksCollapsable.defaultProps = {
  selectedSmartphone: undefined,
  onPickerClick: () => {},
  onViewPricesClick: () => {},
};

export default HowItWorksCollapsable;
