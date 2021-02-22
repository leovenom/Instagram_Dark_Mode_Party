import Quotation from "modules/auto/QuotationFlow";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import { CarModel } from "modules/auto/QuotationFlow/components/steps";

export default function QuotationPage() {
  return (
    <AutoLandingLayout
      noHeader
      noFooter
      canonicalLink="https://pier.digital/seguro-auto/cotacao"
      pageTitle="Cotação auto - Pier"
    >
      <Quotation>
        <CarModel />
      </Quotation>
    </AutoLandingLayout>
  );
}
