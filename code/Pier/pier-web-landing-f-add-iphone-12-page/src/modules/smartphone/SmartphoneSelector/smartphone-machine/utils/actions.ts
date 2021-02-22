import { send, actions } from "xstate";
import { assign } from "@xstate/immer";

import { Actions } from "./constants";

const persistDeviceInfoByKey = assign(
  (ctx: any, { selectedKey, value }: any) => {
    ctx.selected[selectedKey] = value;
    return ctx;
  }
);

const defineDeviceOs = assign((ctx: any, _) => {
  const brand = ctx.allDevices.brands[ctx.selected.brand];
  ctx.selected["deviceOs"] = brand?.deviceOs;

  return ctx;
});

const getSeriesByBrand = assign((ctx: any, _) => {
  ctx.filteredDevices.series = ctx.allDevices.series[ctx.selected.brand];
  return ctx;
});

const getModelsBySerie = assign((ctx: any, _) => {
  const series = ctx.allDevices?.series?.[ctx.selected.brand];

  const modelsBySerie = series.find(
    (family) => family.name === ctx.selected.serie
  );

  ctx.filteredDevices.models = modelsBySerie ? modelsBySerie.models : [];

  return ctx;
});

const getMemoriesByModel = assign((ctx: any, _) => {
  const models = ctx.filteredDevices?.models;

  const memoriesByModel = models.find(
    (model) => model.name === ctx.selected.model
  );

  ctx.filteredDevices.memories = memoriesByModel
    ? memoriesByModel.memories
    : [];

  return ctx;
});

const shouldDispatchToNextState = actions.choose([
  {
    cond: (ctx: any, { itemsToFetch }) =>
      ctx?.filteredDevices?.[itemsToFetch]?.length > 0,
    actions: [
      send((_: any, { selectedKey }: any) => {
        return {
          type: Actions.NEXT_STEP,
          selectedKey,
        };
      }),
    ],
  },
  {
    actions: [
      assign((ctx: any, __: any) => {
        ctx.errorOnTransition = true;
        return ctx;
      }),
    ],
  },
]);

const shouldJumpSerieState = actions.choose([
  {
    cond: (context: any, _: any) =>
      context?.filteredDevices?.series.length === 1,
    actions: [
      send((context: any) => ({
        type: Actions.SELECT_SERIE,
        itemsToFetch: "models",
        selectedKey: "serie",
        value: context?.filteredDevices?.series[0].name,
      })),
    ],
  },
  {
    actions: [assign((ctx: any, _) => (ctx.isLoading = false))],
  },
]);

const cleanTransitionError = assign((ctx: any, _) => {
  ctx.errorOnTransition = false;
  return ctx;
});

export default {
  persistDeviceInfoByKey,
  cleanTransitionError,
  shouldDispatchToNextState,
  shouldJumpSerieState,
  getSeriesByBrand,
  getModelsBySerie,
  getMemoriesByModel,
  defineDeviceOs,
};
