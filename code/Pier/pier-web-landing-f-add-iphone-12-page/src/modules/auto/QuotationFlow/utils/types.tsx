import { STEPS } from "../utils/constants";

export interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface FormData {
  quoteId?: string;
  licensePlate?: string;
  isZeroKm?: "yes" | "no" | null;
  "ship-zip"?: string;
  "ship-address"?: string;
  number?: string;
  "ship-city"?: string;
  neighborhood?: string;
  brand?: any;
  year?: any;
  model?: any;
  cpf?: string;
  isAuctioned?: string;
}

export interface Quote {
  quoteId: string;
  model: {
    value: {
      attributes: {
        model: string;
        make: string;
        model_year: string | number;
      };
    };
  };
  values: {
    driver_identification: string;
    driver_email?: string;
    license_plate?: string;
    chassis?: string;
    vehicle_id?: string;
    item_id: string;
    home_zipcode?: string;
    work_zipcode?: string;
    home_parking_address?: string;
    work_parking_address?: string;
    proposed_premium: { cents: number; currency_iso: string };
    formatted_proposed_premium: string;
    item_market_value: { cents: number; currency_iso: string };
    formatted_item_market_value: string;
    status?: string;
    is_new?: boolean;
    is_auctioned?: boolean;
    refusal_reasons: any;
  };
  cpf: string;
  email?: string;
}

interface MachineData {
  isLoading: boolean;
  error: string;
  uiStepProgress: number;
}

export interface QuotationMachineType extends MachineData {
  formData: FormData;
}

export interface QuotationFlowType extends MachineData {
  step: keyof typeof STEPS;
  formData: FormData;
}
