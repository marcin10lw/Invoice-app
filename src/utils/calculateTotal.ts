export const calculateTotal = <T>(items: T[], key: keyof T) => {
  return items.reduce((total, value) => {
    return total + (value[key] as number);
  }, 0);
};
