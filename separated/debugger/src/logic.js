export const reverse = (str) => {
  const splitted = str.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return joined;
};
