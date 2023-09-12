import { z } from "zod";

const addressSchema = z.object({
  street: z.string().trim().min(2),
  city: z.string().trim().min(2),
  postCode: z.string().trim().length(5),
  country: z.string().trim().min(2),
});

const itemSchema = z.object({
  name: z.string().trim().min(2),
  price: z.number().min(0),
  quantity: z.number().min(0),
  total: z.number().min(0),
});

export const invoiceSchema = z.object({
  clientName: z.string().trim().min(2),
  clientEmail: z.string().email().trim().toLowerCase(),
  paymentDue: z.string().length(10),
  description: z.string().trim().min(2),
  paymentTerms: z.union([
    z.literal(1),
    z.literal(7),
    z.literal(14),
    z.literal(30),
  ]),
  status: z.union([
    z.literal("paid"),
    z.literal("pending"),
    z.literal("draft"),
  ]),
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  items: z.array(itemSchema).optional(),
  total: z.number().min(0),
});
