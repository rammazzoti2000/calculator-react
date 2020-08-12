import calculate from '../logic/calculate';

function calc(total, next = null, operation = null) {
  return { total, next, operation };
}

describe('\'+/-\', \'X\', \'÷\' operations', () => {
  describe('chaining multiple operations', () => {
    test('calculation with unconcluded operation', () => {
      const numOne = '-1';
      const numTwo = '2';
      let calculator;
      let input;
      let output;

      // 1 + 2 + -> 3 + ?
      calculator = calc(numOne, numTwo, '+');
      input = calculate(calculator, '+');
      output = calc('1', null, '+');
      expect(input).toEqual(output);

      // 1 - 2 X -> -1 X ?
      calculator = calc(numOne, numTwo, '-');
      input = calculate(calculator, 'X');
      output = calc('-3', null, 'X');
      expect(input).toEqual(output);

      // 1 X 2 ÷ -> 2 ÷ ?
      calculator = calc(numOne, numTwo, 'X');
      input = calculate(calculator, '÷');
      output = calc('-2', null, '÷');
      expect(input).toEqual(output);

      // 1 + 2 - -> 3 - ?
      calculator = calc(numOne, numTwo, '+');
      input = calculate(calculator, '-');
      output = calc('1', null, '-');
      expect(input).toEqual(output);
    });
  });
});

describe('mod \'%\' operator', () => {
  describe('next number is null', () => {
    test('total is devided by 100', () => {
      // 5 % ? -> 0.05 ? ?
      const calculator = calc('5', null, null);
      const input = calculate(calculator, '%');
      const output = calc('0.05', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('unconcluded operation', () => {
    test('it performs the unconcluded operation and divides by 100', () => {
      // 5 + 19 % -> 0.24 ? ?
      const calculator = calc('5', '19', '+');
      const input = calculate(calculator, '%');
      const output = calc('0.24', null, null);
      expect(input).toEqual(output);
    });
  });
});

describe('\'+/-\' swap operators', () => {
  describe('total the only available', () => {
    test('total swaps sign', () => {
      // 23 ? +/- -> -23 ? ?
      const calculator = calc('23', null, null);
      const input = calculate(calculator, '+/-');
      const output = calc('-23', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('there is an unconcluded operation', () => {
    test('second operand swaps the sign', () => {
      // 5 X 99 +/- -> 5 X (-99)
      const calculator = calc('5', '99', 'X');
      const input = calculate(calculator, '+/-');
      const output = calc('5', '-99', 'X');
      expect(input).toEqual(output);
    });
  });
});

describe('\'=\' operator', () => {
  describe('there is a unconcluded operation', () => {
    test('it updates the total and resets the other properties', () => {
      // 87 + (-34) = -> 53 ? ?
      const calculator = calc('87', '-34', '+');
      const input = calculate(calculator, '=');
      const output = calc('53', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('only total is available', () => {
    test('total assinged to own value', () => {
      // 66 ? ? = -> 66 ? ?
      const calculator = calc('66', null, null);
      const input = calculate(calculator, '=');
      expect(input).toEqual(calculator);
    });
  });
});

describe('numeric keys', () => {
  describe('operation is present', () => {
    test('it modifies next to be the sequence of digits passed', () => {
      let calculator;
      let input;
      let output;

      // 0 + ? 5 -> 0 + 5
      calculator = calc('0', null, '+');
      input = calculate(calculator, '5');
      output = calc('0', '5', '+');
      expect(input).toEqual(output);

      // 17 X ? 9 -> 17 X 9 8 -> 17 X 98
      calculator = calc('17', null, 'X');
      input = calculate(calculator, '9');
      input = calculate(input, '8');
      output = calc('17', '98', 'X');
      expect(input).toEqual(output);
    });
  });

  describe('total only assigned', () => {
    describe('total has value zero', () => {
      // 0 ? ? 7 -> 7 ? ?
      const calculator = calc('0', null, null);
      const input = calculate(calculator, '7');
      const output = calc('7', null, null);
      expect(input).toEqual(output);
    });

    describe('total has value other than zero', () => {
      // 7 ? ? 4 -> 74 ? ?
      const calculator = calc('7', null, null);
      const input = calculate(calculator, '4');
      const output = calc('74', null, null);
      expect(input).toEqual(output);
    });
  });
});

describe('decimal point', () => {
  describe('operation is present', () => {
    describe('there is a next number', () => {
      test('it places a decimal point at the end of the next number', () => {
        // 5 - 3 . -> 5 - 3.
        const calculator = calc('5', '3', '-');
        const input = calculate(calculator, '.');
        const output = calc('5', '3.', '-');
        expect(input).toEqual(output);
      });

      test('it does nothing if there is a decimal point already', () => {
        // 5 - 3. . -> 5 - 3.
        const calculator = calc('5', '3.', '-');
        const input = calculate(calculator, '.');
        expect(input).toEqual(calculator);
      });
    });

    describe('there is no next number', () => {
      test('it creates 0. as the next number', () => {
        // 5 - ? . -> 5 - 0.
        const calculator = calc('5', null, '-');
        const input = calculate(calculator, '.');
        const output = calc('5', '0.', '-');
        expect(input).toEqual(output);
      });
    });
  });

  describe('only total is present', () => {
    test('it places a decimal point at the end of the total', () => {
      // 99 ? ? . -> 99. ? ?
      const calculator = calc('99');
      const input = calculate(calculator, '.');
      const output = calc('99.');
      expect(input).toEqual(output);
    });

    test('it does nothing if there is a decimal point already', () => {
      // 99. ? ? . -> 99. ? ?
      const calculator = calc('99.');
      const input = calculate(calculator, '.');
      expect(input).toEqual(calculator);
    });
  });
});

describe('AC', () => {
  describe('there is a next number', () => {
    test('it sets the next number to zero', () => {
      // 65 + 23 AC -> 65 + 0
      const calculator = calc('65', '23', '+');
      const input = calculate(calculator, 'AC');
      const output = calc('65', '0', '+');
      expect(input).toEqual(output);
    });
  });

  describe('there is no next number, but there is an operation', () => {
    test('it undefines the operation', () => {
      // 87 X ? AC -> 87 ? ?
      const calculator = calc('87', null, 'X');
      const input = calculate(calculator, 'AC');
      const output = calc('87', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('there is only total', () => {
    test('it sets total to zero', () => {
      // 76 ? ? AC -> 0 ? ?
      const calculator = calc('76');
      const input = calculate(calculator, 'AC');
      const output = calc('0');
      expect(input).toEqual(output);
    });
  });
});
