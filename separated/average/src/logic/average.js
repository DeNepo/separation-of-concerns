export const average = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  const avg = sum / arr.length;
  return avg;
};
