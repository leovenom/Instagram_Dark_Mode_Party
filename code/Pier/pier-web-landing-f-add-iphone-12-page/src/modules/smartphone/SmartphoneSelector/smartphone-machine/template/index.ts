import { actions, Actions, guards, States } from "../utils";

const machineStructure: any = {};

machineStructure.template = {
  id: "smartphoneSelector",
  initial: States.brand,
  context: {},
  states: {
    [States.brand]: {
      on: {
        [Actions.SELECT_BRAND]: {
          actions: [
            "persistDeviceInfoByKey",
            "defineDeviceOs",
            "getSeriesByBrand",
            "shouldDispatchToNextState",
          ],
        },
        [Actions.NEXT_STEP]: {
          target: States.serie,
          actions: ["cleanTransitionError"],
          cond: "currentStepHasBeenSelected",
        },
      },
    },
    [States.serie]: {
      entry: ["shouldJumpSerieState"],
      on: {
        [Actions.SELECT_SERIE]: {
          actions: [
            "persistDeviceInfoByKey",
            "getModelsBySerie",
            "shouldDispatchToNextState",
          ],
        },
        [Actions.BACK]: States.brand,
        [Actions.NEXT_STEP]: {
          target: States.model,
          actions: "cleanTransitionError",
          cond: "currentStepHasBeenSelected",
        },
      },
    },
    [States.model]: {
      on: {
        [Actions.SELECT_MODEL]: {
          actions: [
            "persistDeviceInfoByKey",
            "getMemoriesByModel",
            "shouldDispatchToNextState",
          ],
        },
        [Actions.BACK]: States.serie,
        [Actions.JUMP_TO_BRAND]: States.brand,
        [Actions.NEXT_STEP]: {
          target: States.memory,
          actions: ["cleanTransitionError"],
          cond: "currentStepHasBeenSelected",
        },
      },
    },
    [States.memory]: {
      on: {
        [Actions.SELECT_MEMORY]: {
          target: States.final,
          actions: "persistDeviceInfoByKey",
        },
        [Actions.BACK]: States.model,
        [Actions.NEXT_STEP]: {
          target: States.final,
          actions: ["cleanTransitionError"],
          cond: "currentStepHasBeenSelected",
        },
      },
    },
    [States.final]: {
      on: {
        [Actions.RESET]: States.brand,
      },
    },
  },
};

machineStructure.actions = actions;

machineStructure.guards = guards;

export default machineStructure;
