export const isTagYear = (name: string) => {
  const year = parseInt(name);
  return !isNaN(year) && year >= 1900 && year <= 2100;
};
