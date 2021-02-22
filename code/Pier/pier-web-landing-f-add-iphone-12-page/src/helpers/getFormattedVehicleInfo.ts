export default function getMakerAndVehicleName(vehicle): string {
  const { make, model, model_year: year } = vehicle;
  const vehicleName = model.split(" ")[0];

  return `${make} ${vehicleName}`;
}

export function getDriverFirstName(driverName: string): string {
  return driverName?.split(" ")[0] || "";
}

export function getVehicleDisplayName(vehicle): string {
  const { make, model } = vehicle;

  const makeName = make.split(" ")[0];
  const vehicleName = model.split(" ")[0];

  return `${makeName} ${vehicleName}`;
}

export function getFormattedPrice(price): string {
  const dollarSignPos = price.indexOf("$") + 1;

  return `${price.substring(0, dollarSignPos)} ${price.substring(
    dollarSignPos
  )}`;
}
