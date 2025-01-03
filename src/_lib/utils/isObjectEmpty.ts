export const isObjectEmpty = (obj: any) => {
  if (!obj) {
    return true;
  }

  return Object.keys(obj).length === 0;
};
