import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Invoice } from "types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getInvoices: builder.query<Invoice[], undefined>({
      query: () => "/Invoice-app/data.json",
    }),
    addInvoice: builder.mutation({
      query: (invoice) => ({
        url: "/invoices",
        method: "POST",
        body: invoice,
      }),
    }),
    updateInvoice: builder.mutation({
      query: (invoice) => ({
        url: `/invoices/${invoice.id}`,
        method: "PATCH",
        body: invoice,
      }),
    }),
    deleteInvoice: builder.mutation({
      query: ({ id }) => ({
        url: `/invoices/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useAddInvoiceMutation,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = apiSlice;
