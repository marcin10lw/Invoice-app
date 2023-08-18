import format from "date-fns/format";

export const getFormattedPaymentDue = (paymentDue: string) => {
  return format(new Date(paymentDue), "dd LLL yyyy");
};
