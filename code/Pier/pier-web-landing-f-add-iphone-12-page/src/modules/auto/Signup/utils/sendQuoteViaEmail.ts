import * as date from "helpers/date";
import { autoTracker } from "helpers/mixpanelTracker";
import sendQuotationByEmail from "services/auto/sendQuotationByEmail";

async function sendQuotationEmail(
  sendEmailRequest,
  token,
  email,
  quotation,
  car,
  baseTrackingName
) {
  const { options, url } = sendQuotationByEmail(email, quotation);

  await sendEmailRequest(url, options);

  autoTracker.trackTransactionConfirmed(`${baseTrackingName} Sending Email`, {
    email,
  });
}

async function sendQuoteViaEmail(
  sendEmailRequest,
  autoQuotation: {
    quoteId: string;
    values: any;
    model: { value: { attributes: any } };
  },
  token: string,
  email: string,
  baseTrackingName: string
) {
  const quotation = {
    id: autoQuotation?.quoteId,
    ...autoQuotation?.values,
  };
  const car = autoQuotation?.model?.value?.attributes;
  await sendQuotationEmail(
    sendEmailRequest,
    token,
    email,
    quotation,
    car,
    baseTrackingName
  );
}

export default sendQuoteViaEmail;
