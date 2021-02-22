const canItBeANewCar = (modelYear: string | number) => {
  const currentYear = new Date().getFullYear();
  return Number(modelYear) >= currentYear - 1;
};

export default canItBeANewCar;
