export type InvoiceStatus = "pending" | "paid" | "draft";

type InvoiceAddress = {
  city: string;
  country: string;
  postCode: string;
  street: string;
};

export type InvoiceItem = {
  name: string;
  price: number;
  quantity: number;
  total: number;
};

type PaymentTerms = 1 | 7 | 14 | 30;

export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: PaymentTerms;
  clientName: string;
  total: number;
  status: InvoiceStatus;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  clientEmail: string;
  items: InvoiceItem[];
};

export type StatusTag = InvoiceStatus | "total";
