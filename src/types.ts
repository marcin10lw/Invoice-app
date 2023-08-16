export type InvoiceStatus = "pending" | "paid" | "draft";

export type Invoice = {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: InvoiceStatus;
};

export type StatusTag = InvoiceStatus | "total";
