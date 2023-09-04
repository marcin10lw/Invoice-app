import format from "date-fns/format";

export const getFormattedDate = (date: string) => {
  return format(new Date(date), "dd LLL yyyy");
};
