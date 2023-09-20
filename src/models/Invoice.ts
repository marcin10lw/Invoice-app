import { z } from "zod";

const status = ["paid", "pending", "draft"] as const;

const addressSchema = z.object({
  street: z.string().trim().min(2),
  city: z.string().trim().min(2),
  postCode: z.string().trim().min(1),
  country: z.string().trim().min(2),
});

const itemSchema = z
  .object({
    name: z.string().trim().min(2),
    price: z.number().gte(0).default(0),
    quantity: z.number().gte(0).default(0),
    total: z.number().min(0).default(0),
  })
  .refine((data) => {
    data.total = data.price * data.quantity;
    return true;
  });

export const invoiceSchema = z
  .object({
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
    status: z.enum(status),
    senderAddress: addressSchema,
    clientAddress: addressSchema,
    items: z.array(itemSchema).optional(),
    total: z.number().min(0),
  })
  .refine((data) => {
    data.total =
      data.items?.reduce((accumulator, { total }) => {
        return accumulator + total;
      }, 0) ?? 0;

    return true;
  });
