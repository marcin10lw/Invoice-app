export const getFormattedTotal = (total: number) => {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  return formattedTotal;
};
