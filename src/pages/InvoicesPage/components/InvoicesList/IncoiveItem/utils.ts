import { InvoiceStatus } from "types";

export const getFormattedTotal = (total: number) => {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  return formattedTotal;
};

export const getStatusClassName = (status: InvoiceStatus) => {
  switch (status) {
    case "pending":
      return "invoice__status--pending";
    case "draft":
      return "invoice__status--draft";
    case "paid":
      return "invoice__status--paid";
  }
};
