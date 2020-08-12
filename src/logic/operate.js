import Big from 'big.js';

let result;

function operate(numberOne, numberTwo, operation) {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  if (operation === 'X') {
    result = numOne.times(numTwo);
  }
  if (operation === '-') {
    result = numOne.minus(numTwo);
  }
  if (operation === '+') {
    result = numOne.plus(numTwo);
  }
  if (operation === '÷') {
    result = numOne.div(numTwo);
  }
  if (operation === '%') {
    result = numOne.mod(numTwo);
  }
}

export default operate;
