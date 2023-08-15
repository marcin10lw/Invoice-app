import axios from "axios";

import { Invoice } from "types";

export const fetchInvoices = async (): Promise<Invoice[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { data } = await axios.get("data.json");
  return data;
};
