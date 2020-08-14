const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);

  switch (operation) {
    case '-':
      return numOne.minus(numTwo);
    case '+':
      return numOne.plus(numTwo);
    case 'x':
      return numOne.times(numTwo);
    case '÷':
      if (numberTwo === '0') {
        return 'Fatal: Division by 0';
      }

      return numOne.div(numTwo);
    case '%':
      return numOne.div(100);
    default:
      break;
  }
  return -1;
};

export default operate;
