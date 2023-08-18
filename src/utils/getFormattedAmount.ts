export const getFormattedAmount = (amount: number) => {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(amount);

  return formattedTotal;
};
