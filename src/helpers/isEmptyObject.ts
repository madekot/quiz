export const isEmptyObject = (obj?: object) => {
  return Boolean(!Object.values(obj || {}).length);
};
