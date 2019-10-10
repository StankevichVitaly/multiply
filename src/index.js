module.exports = function multiply(first, second) {
  const firstArray = [...first];
  const secondArray = [...second];
  let resultArray = [];
  for (let i = secondArray.length - 1; i >= 0; i--) {
    for (let j = firstArray.length - 1; j >= 0; j--) {
      let number = Number(firstArray[j]) * Number(secondArray[i]);
      let currentIndex = firstArray.length - 1 - i + secondArray.length - j - 1;
      if (resultArray[currentIndex] === undefined) resultArray[currentIndex] = 0;
      resultArray[currentIndex] += number;
    }
  }
  for (let index = 0; index < resultArray.length; index++) {
    const element = resultArray[index];
    if (element >= 10) {
      if (resultArray[index + 1] === undefined) resultArray[index + 1] = 0;
      resultArray[index + 1] += Math.floor(element / 10);
      resultArray[index] %= 10;
    }
  }
  return resultArray.reverse().join("");
};
