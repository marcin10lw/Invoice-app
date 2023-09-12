import dayjs from "dayjs";

import { Invoice } from "types";

export const defaultValues: Invoice = {
  id: "",
  clientName: "",
  clientEmail: "",
  createdAt: "",
  paymentDue: dayjs().format("YYYY-MM-DD"),
  description: "",
  paymentTerms: 1,
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
