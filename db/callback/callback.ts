export const callback = (error: Error, rows: Array<Object>) => {
  if (error) {
    console.error(error);
    return;
  }
  console.debug(rows);
};
