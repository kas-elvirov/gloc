export const isObjectValid = (obj: any) => {
  if (!obj) {
    return false;
  }

  return Object.keys(obj).length !== 0;
};
