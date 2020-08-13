import Big from 'big.js/big';
import operate from '../logic/operate';

function operateTest(numberOne, numberTwo, operation) {
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

test('it adds two numbers', () => {
  const numOne = '1';
  const numTwo = '2';
  const given = operate(numOne, numTwo, '+');
  const expected = operateTest(numOne, numTwo, '+');
  expect(given).toEqual(expected);
});

test('it subtracts two numbers', () => {
  const numOne = '1';
  const numTwo = '2';
  const given = operate(numOne, numTwo, '-');
  const expected = operateTest(numOne, numTwo, '-');
  expect(given).toEqual(expected);
});

test('it multiplies two numbers', () => {
  const numOne = '1';
  const numTwo = '2';
  const given = operate(numOne, numTwo, 'X');
  const expected = operateTest(numOne, numTwo, 'X');
  expect(given).toEqual(expected);
});

test('it divides two numbers', () => {
  const numOne = '1';
  const numTwo = '2';
  const given = operate(numOne, numTwo, '÷');
  const expected = operateTest(numOne, numTwo, '÷');
  expect(given).toEqual(expected);
});
