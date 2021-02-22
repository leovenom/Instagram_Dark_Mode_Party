const currentYear = new Date().getFullYear();

const validateLicensePlateYear = (modelYear: string | number): boolean => {
  const year = Number(modelYear);

  return year > 0 && year <= currentYear + 1;
};

export default validateLicensePlateYear;
