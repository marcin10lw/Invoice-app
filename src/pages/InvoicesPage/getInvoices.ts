import axios from "axios";

import { Invoice } from "types";

export const getInvoices = async (): Promise<Invoice[]> => {
  const { data } = await axios.get("data.json");

  return data.invoices ?? [];
};
