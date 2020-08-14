import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  let valueArg;

  if (operation === 'X') {
    valueArg = numOne.times(numTwo);
  }
  if (operation === '-') {
    valueArg = numOne.minus(numTwo);
  }
  if (operation === '+') {
    valueArg = numOne.plus(numTwo);
  }
  if (operation === '÷') {
    valueArg = numOne.div(numTwo);
  }
  if (operation === '%') {
    valueArg = numOne.mod(numTwo);
  }

  return valueArg.toString();
}

export default operate;
