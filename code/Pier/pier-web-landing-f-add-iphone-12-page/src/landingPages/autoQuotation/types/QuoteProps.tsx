export default interface QuoteProps {
  vehicle: string;
  coveragePercentage: number;
  insurancePriceInCents: number;
  basePriceInCents: number;
  fipeValueInCents: number;
  isZipCodeCovered: boolean;
  email?: string;
  assistanceWithUnlimitedKm: boolean;
  modifiers: string[];
}
