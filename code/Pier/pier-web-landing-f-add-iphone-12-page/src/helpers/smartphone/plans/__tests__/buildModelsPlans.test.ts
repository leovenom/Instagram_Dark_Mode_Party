import * as SmartphonePlansService from "services/smartphone/plans";
import { buildModelsPlans } from "helpers/smartphone/plans/buildModelsPlans";
import { internalPlans } from "helpers/smartphone/plans/__fixtures__/internalPlans";

describe("buildModelsPlans", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("when remote fetch succeeds", () => {
    beforeAll(() => {
      jest
        .spyOn(SmartphonePlansService, "fetchPlans")
        .mockResolvedValueOnce(internalPlans);
    });

    it("should parse smartphone models and its associated plans", async () => {
      const expectedSmartphoneModels = [
        {
          deviceOs: "ios",
          name: "Apple",
          manufacturer: "Apple",
          models: [
            { name: "iPhone XS Max", memories: ["64GB", "256GB"] },
            { name: "iPhone XS", memories: ["64GB", "256GB"] },
          ],
        },
      ];

      const expectedPlansValues = {
        IPHONE_XS_64GB: {
          premium: { insuredValue: 4180, price: 89.7 },
          economic: { insuredValue: 3344, price: 65.3 },
        },
        IPHONE_XS_256GB: {
          premium: { insuredValue: 4670, price: 100.2 },
          economic: { insuredValue: 3736, price: 72.9 },
        },
        IPHONE_XS_MAX_64GB: {
          premium: { insuredValue: 4610, price: 98.9 },
          economic: { insuredValue: 3688, price: 72 },
        },
        IPHONE_XS_MAX_256GB: {
          premium: { insuredValue: 5070, price: 108.8 },
          economic: { insuredValue: 4056, price: 79.1 },
        },
      };

      const { smartphoneModels, plansValues } = await buildModelsPlans();

      expect(smartphoneModels).toMatchObject(expectedSmartphoneModels);
      expect(plansValues).toMatchObject(expectedPlansValues);
    });
  });

  describe("when remote fetch fails", () => {
    const thrownMessage = "Request failed with status 422";

    beforeAll(() => {
      jest
        .spyOn(SmartphonePlansService, "fetchPlans")
        .mockRejectedValueOnce(new Error(thrownMessage));
    });

    it("should throw an exception to stop static page building", async () => {
      await expect(buildModelsPlans()).rejects.toEqual(
        new Error(`Failed to build available plans due to: ${thrownMessage}`)
      );
    });
  });
});
