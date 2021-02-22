import maskMoney from "helpers/maskMoney";

import { fireEvent, within } from "@testing-library/react";
import { renderWithTheme } from "helpers/testUtils";
import { nextPipeUpdateAt } from "helpers/pipePlansValues";

import ChooseYourPlan from "landingPages/smartphone/sections/ChooseYourPlan";
import planCardData from "landingPages/smartphone/components/PlanCard/data";
import componentsData from "landingPages/smartphone/components/data";

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/seguro-celular",
    pathname: "",
    query: {},
    asPath: "",
  }),
}));

describe("<ChooseYourPlan />", () => {
  const selectedSmartphone = {
    deviceOs: "ios",
    id: "IPHONE_11_PRO_64GB",
    memory: "64GB",
    model: "iPhone 11 Pro",
    plansValues: {
      economic: { insuredValue: "4480.0", price: "87.4", discount: null },
      premium: { insuredValue: "5600.0", price: "120.2", discount: null },
    },
    serie: "Apple",
    manufacturer: "Apple",
  };

  const getOnlyLocalePrice = (price: string | number) =>
    maskMoney(price).replace("R$", "").trim();

  describe.skip("when selected smartphone has pricing update", () => {
    const newSmartphonePricing = {
      economic: { insuredValue: "4100", price: "79.2" },
      premium: { insuredValue: "5130", price: "109" },
    };

    it("can toggle current and future plans prices", () => {
      const { getByText, getAllByText, getByTestId } = renderWithTheme(
        <ChooseYourPlan selectedSmartphone={selectedSmartphone} />
      );

      /** UI state before toggle click */
      getByText(
        getOnlyLocalePrice(selectedSmartphone.plansValues.premium.price)
      );
      getByText(
        getOnlyLocalePrice(selectedSmartphone.plansValues.economic.price)
      );
      getAllByText(
        maskMoney(selectedSmartphone.plansValues.premium.insuredValue)
      );
      getByText(
        maskMoney(selectedSmartphone.plansValues.economic.insuredValue)
      );
      getAllByText("Pedir convite");

      const switcherButton = getByTestId("switch-button");

      fireEvent.click(switcherButton);

      /** UI state after toggle click */
      getByText(getOnlyLocalePrice(newSmartphonePricing.premium.price));
      getByText(getOnlyLocalePrice(newSmartphonePricing.economic.price));
      getAllByText(maskMoney(newSmartphonePricing.premium.insuredValue));
      getByText(maskMoney(newSmartphonePricing.economic.insuredValue));
      getAllByText(
        planCardData.pricingUpdate(nextPipeUpdateAt.format("DD/MM/YYYY"))
      );
    });

    it("should show when pricing update will happen", () => {
      const { getByText } = renderWithTheme(
        <ChooseYourPlan selectedSmartphone={selectedSmartphone} />
      );

      getByText(
        componentsData.pipeBanner.descriptionTwo(
          nextPipeUpdateAt.format("DD/MM/YYYY")
        )
      );
    });
  });

  describe("when selected model has discount associated", () => {
    const discount = { type: "percentage", amount: 50, duration: 2 };

    beforeAll(() => {
      selectedSmartphone.plansValues.economic.discount = discount;
      selectedSmartphone.plansValues.premium.discount = discount;
    });

    it("should render discount specifications", () => {
      const { getByTestId } = renderWithTheme(
        <ChooseYourPlan selectedSmartphone={selectedSmartphone} />
      );
      const economicCard = getByTestId("economic-card");
      const premiumCard = getByTestId("premium-card");

      /** Economic card assertions */
      within(economicCard).getByText(
        `Desconto de ${discount.amount}% por ${discount.duration} meses 🎁`
      );
      within(economicCard).getByText(
        "Após esse período seu plano voltará ao valor original"
      );
      within(economicCard).getByText(
        getOnlyLocalePrice(
          (parseFloat(selectedSmartphone.plansValues.economic.price) *
            discount.amount) /
            100
        )
      );
      within(economicCard).getByText(
        maskMoney(selectedSmartphone.plansValues.economic.price)
      );

      /** Premium card assertions */
      within(premiumCard).getByText(
        `Desconto de ${discount.amount}% por ${discount.duration} meses 🎁`
      );
      within(premiumCard).getByText(
        "Após esse período seu plano voltará ao valor original"
      );
      within(premiumCard).getByText(
        getOnlyLocalePrice(
          (parseFloat(selectedSmartphone.plansValues.premium.price) *
            discount.amount) /
            100
        )
      );
      within(premiumCard).getByText(
        maskMoney(selectedSmartphone.plansValues.premium.price)
      );
    });

    afterAll(() => {
      selectedSmartphone.plansValues.economic.discount = null;
      selectedSmartphone.plansValues.premium.discount = null;
    });
  });
});
