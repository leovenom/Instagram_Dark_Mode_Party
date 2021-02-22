const pluralize = (quantity: number, singular: string, plural: string) =>
  quantity > 1 ? plural : singular;

export default pluralize;
