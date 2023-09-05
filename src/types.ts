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
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  total: number;
  status: InvoiceStatus;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  clientEmail: string;
  items: InvoiceItem[];
};

export type StatusTag = InvoiceStatus | "total";
