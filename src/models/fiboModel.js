const fibonacciSequence = (qtdNumbers) => {
  const array = [];
  for (let i = 0; i < qtdNumbers; i += 1) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
};

module.exports = fibonacciSequence;
