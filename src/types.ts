export type InvoiceStatus = "pending" | "paid" | "draft";

type InvoiceAddress = {
  city: string;
  country: string;
  postCode: string;
  street: string;
};

type InvoiceItem = {
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type Invoice = {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: InvoiceStatus;
  description: string;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  clientEmail: string;
  items: InvoiceItem[];
};

export type StatusTag = InvoiceStatus | "total";
