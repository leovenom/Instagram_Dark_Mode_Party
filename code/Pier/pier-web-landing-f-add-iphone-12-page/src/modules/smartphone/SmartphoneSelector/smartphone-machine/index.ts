import SmartphoneMachine from "./smartphone-machine";

const useSmartphoneMachine = ({ brands = [], series = {} }) => {
  return SmartphoneMachine.setupMachine({
    brands,
    series,
  });
};
export { useSmartphoneMachine };
