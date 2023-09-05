import dayjs from "dayjs";

import { Invoice } from "types";

export const defaultValues: Invoice = {
  id: "",
  createdAt: "",
  paymentDue: dayjs().format("YYYY-MM-DD"),
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "pending",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};
