import axios from "axios";

import { Invoice } from "types";

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const { data } = await axios.get("data.json");
  return data;
};
