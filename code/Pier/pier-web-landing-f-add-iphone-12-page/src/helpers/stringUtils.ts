export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const removeSpecialCharacters = (str: string) =>
  str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");

export const removeNonDigits = (str: string) => str.replace(/\D/g, "");
