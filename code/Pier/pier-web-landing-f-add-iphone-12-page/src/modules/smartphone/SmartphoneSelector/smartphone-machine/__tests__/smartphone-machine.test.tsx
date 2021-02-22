import { renderHook, act } from "@testing-library/react-hooks";
import { useSmartphoneMachine } from "..";
import { States } from "../utils";

import { brands, series } from "../__fixtures__";

describe("smartphone-machine", () => {
  const setupMachine = ({ brands, series }) =>
    renderHook(() => useSmartphoneMachine({ brands, series }));

  test("Should start the machine in the initial state (brand)", () => {
    const { result } = setupMachine({ brands, series });

    expect(result.current.state).toBe(States.brand);
  });

  describe("When select a brand", () => {
    test("Should change to serie state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Motorola");
      });

      expect(result.current.state).toBe(States.serie);
    });

    test("Should persist the selected brand", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
      });

      expect(result.current.context.selected.brand).toBe("Apple");
    });

    test("Should persist the deviceOs", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
      });

      expect(result.current.context.selected.deviceOs).toBe("ios");
    });

    test("Should filter devices series by the brand selected", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Motorola");
      });

      const filteredSeries = result.current.context.filteredDevices.series;
      expect(filteredSeries).not.toEqual(series["Apple"]);
      expect(filteredSeries).toEqual(series["Motorola"]);
    });

    describe("If the selected brand has only one series", () => {
      test("Should jump to model state", () => {
        const { result } = setupMachine({ brands, series });
        const { actions } = result.current;

        act(() => {
          actions.selectBrand("Apple");
        });

        expect(result.current.state).not.toBe(States.serie);
        expect(result.current.state).toBe(States.model);
      });

      test("Should persist the serie of the selected brand", () => {
        const { result } = setupMachine({ brands, series });
        const { actions } = result.current;

        act(() => {
          actions.selectBrand("Apple");
        });

        expect(result.current.context.selected.serie).toBe("Apple");
      });

      test("Should filter device models by the brand/serie seleceted", () => {
        const { result } = setupMachine({ brands, series });
        const { actions } = result.current;

        act(() => {
          actions.selectBrand("Apple");
        });

        const filteredModels = result.current.context.filteredDevices.models;
        expect(filteredModels).toEqual(series["Apple"][0].models);
      });
    });
  });

  describe("When select a serie", () => {
    test("Should persist the selected serie", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Motorola");
        actions.selectSerie("Motorola Moto G");
      });

      expect(result.current.context.selected.serie).toBe("Motorola Moto G");
    });

    test("Should change to model state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Motorola");
        actions.selectSerie("Motorola Moto G");
      });

      expect(result.current.state).toBe(States.model);
    });

    test("Should filter devices models by the serie selected", () => {
      const selectedBrand = "Motorola";
      const selectedSerie = "Motorola Moto G";
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand(selectedBrand);
        actions.selectSerie(selectedSerie);
      });

      const filteredModels = result.current.context.filteredDevices.models;
      const motoGModels = series[selectedBrand].find(
        (serie) => serie.name === selectedSerie
      );

      expect(filteredModels).toEqual(motoGModels.models);
    });
  });

  describe("When select a model", () => {
    test("Should persist the selected model", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Motorola");
        actions.selectSerie("Motorola Moto G");
        actions.selectModel("Moto G9 Plus");
      });

      expect(result.current.context.selected.model).toBe("Moto G9 Plus");
    });

    test("Should filter device memories by the selected model", () => {
      const selectedBrand = "Apple";
      const selectedModel = "iPhone 12 mini";

      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand(selectedBrand);
        actions.selectModel(selectedModel);
      });

      const filteredMemories =
        result.current.context.filteredDevices.models[0].memories;

      const iphoneModel = series[selectedBrand][0].models.find(
        (model) => model.name === selectedModel
      );

      expect(filteredMemories).toEqual(iphoneModel.memories);
    });

    test("Should change to memory state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
        actions.selectModel("iPhone 12 mini");
      });

      expect(result.current.state).toBe(States.memory);
    });
  });

  describe("When select a memory", () => {
    test("Should persist the selected memory", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
        actions.selectModel("iPhone 12 mini");
        actions.selectMemory("128GB");
      });

      expect(result.current.context.selected.memory).toBe("128GB");
    });

    test("Should change to final state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
        actions.selectModel("iPhone 12 mini");
        actions.selectMemory("128GB");
      });

      expect(result.current.state).toBe(States.final);
    });
  });

  describe("When dispatch a back action", () => {
    test("Should return to last state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      expect(result.current.state).toBe(States.brand);
      act(() => {
        actions.selectBrand("Motorola");
      });
      expect(result.current.state).toBe(States.serie);
      act(() => {
        actions.back();
      });
      expect(result.current.state).toBe(States.brand);
    });

    describe("If jump the serie state", () => {
      test("Should return to brand state", () => {
        const { result } = setupMachine({ brands, series });
        const { actions } = result.current;

        expect(result.current.state).toBe(States.brand);
        act(() => {
          actions.selectBrand("Apple");
        });
        expect(result.current.state).toBe(States.model);
        act(() => {
          actions.back();
        });
        expect(result.current.state).toBe(States.brand);
      });
    });
  });

  describe("When dispatch restart action", () => {
    test("Should return to brand state", () => {
      const { result } = setupMachine({ brands, series });
      const { actions } = result.current;

      act(() => {
        actions.selectBrand("Apple");
        actions.selectModel("iPhone 12 mini");
        actions.selectMemory("128GB");
        actions.restart();
      });

      expect(result.current.state).toBe(States.brand);
    });
  });
});
