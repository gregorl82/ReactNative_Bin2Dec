export const binaryToDecimal = (binaryString) => {
  const binaryChars = binaryString.split('').reverse();
  return binaryChars.reduce((prev, current, index) => {
    return prev + Number(current) * Math.pow(2, index);
  }, 0);
};
