import { Invoice } from "types";
import invoicesData from "data.json";

export const getInvoices = async (): Promise<Invoice[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(invoicesData.invoices as any);
    }, 400);
  });
};
