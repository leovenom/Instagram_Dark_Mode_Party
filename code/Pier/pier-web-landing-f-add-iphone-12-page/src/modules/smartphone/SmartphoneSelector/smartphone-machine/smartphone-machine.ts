import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import machine from "./template";
import { Actions, context, ItemsToFetch, SelectedKeys, States } from "./utils";

class SmartphoneMachine {
  send: any;

  current: any;

  constructor() {
    this.current = null;
    this.send = null;
  }

  setupMachine = ({ brands = [], series = {} }) => {
    const initialMachine = Machine<any>(
      { ...machine.template },
      { actions: machine.actions, guards: machine.guards }
    );

    const [current, send] = useMachine(
      initialMachine.withContext({
        ...context,
        allDevices: {
          brands,
          series,
        },
        filteredDevices: {},
      })
    );

    this.current = current;
    this.send = send;

    return {
      actions: this.actions(),
      state: this.currentState(),
      context: this.currentContext(),
    };
  };

  actions = () => ({
    selectBrand: (value: string) =>
      this.send(Actions.SELECT_BRAND, {
        selectedKey: SelectedKeys.brand,
        itemsToFetch: ItemsToFetch.series,
        value,
      }),

    selectSerie: (value: string) =>
      this.send(Actions.SELECT_SERIE, {
        selectedKey: SelectedKeys.serie,
        itemsToFetch: ItemsToFetch.models,
        value,
      }),

    selectModel: (value: string) =>
      this.send(Actions.SELECT_MODEL, {
        selectedKey: SelectedKeys.model,
        itemsToFetch: ItemsToFetch.memories,
        value,
      }),

    selectMemory: (value: string) =>
      this.send(Actions.SELECT_MEMORY, {
        selectedKey: SelectedKeys.memory,
        itemsToFetch: "",
        value,
      }),

    back: () => {
      const { context, value } = this.current;
      const numberOfSeries = context?.filteredDevices?.series?.length;

      if (value === States.model && numberOfSeries === 1) {
        return this.send(Actions.JUMP_TO_BRAND);
      }

      this.send(Actions.BACK);
    },

    restart: () => {
      this.send(Actions.RESET);
    },
  });

  currentState = () => this?.current?.value;

  currentContext = () => this?.current?.context;
}

export default new SmartphoneMachine();
