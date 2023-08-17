import { Invoice, StatusTag } from "types";

export const filterInvoices = (invoices: Invoice[], statusTag: StatusTag) => {
  const filteredInvoices = invoices?.filter((invoice) => {
    if (statusTag === "total") {
      return true;
    }

    return invoice.status === statusTag;
  });

  return filteredInvoices;
};
