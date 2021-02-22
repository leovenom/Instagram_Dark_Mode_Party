import { renderWithTheme } from "helpers/testUtils";
import maskMoney from "helpers/maskMoney";
import { PriceInfo } from "../components/CardPrice/components";

const renderComponent = ({ smartphoneSelected, variant = "today" }) =>
  renderWithTheme(
    <PriceInfo variant={variant} smartphoneSelected={smartphoneSelected} />
  );

const selectedSmartphone = {
  deviceOs: "ios",
  manufacturer: undefined,
  memory: "16GB",
  model: { memories: ["16GB", "32GB", "64GB", "128GB"], name: "iPhone 6S" },
  plansValues: {
    premium: { insuredValue: 712.0, price: 13.9 },
    economic: { insuredValue: 890.0, price: 19.1 },
  },
  serie: "Apple",
};

describe("<PriceInfo />", () => {
  it("Should render without errors", () => {
    const { container } = renderComponent({
      smartphoneSelected: selectedSmartphone,
    });
    expect(container).toMatchSnapshot();
  });

  it("Should render the component with the correct info", () => {
    const { getByText, getAllByText } = renderComponent({
      smartphoneSelected: selectedSmartphone,
    });

    // Economic Montlhy Plan and Economic Insured Value
    getByText(maskMoney(selectedSmartphone.plansValues.economic.price));
    getByText(maskMoney(selectedSmartphone.plansValues.economic.insuredValue));

    // Premium Montlhy Plan and Economic Insured Value
    getByText(maskMoney(selectedSmartphone.plansValues.premium.price));
    getAllByText(
      maskMoney(selectedSmartphone.plansValues.premium.insuredValue)
    );
  });
});
