import calculate from '../logic/calculate';

function calcTest(total, next = null, operation = null) {
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

      calculator = calcTest(numOne, numTwo, '+');
      input = calculate(calculator, '+');
      output = calcTest('1', null, '+');
      expect(input).toEqual(output);

      calculator = calcTest(numOne, numTwo, '-');
      input = calculate(calculator, 'X');
      output = calcTest('-3', null, 'X');
      expect(input).toEqual(output);

      calculator = calcTest(numOne, numTwo, 'X');
      input = calculate(calculator, '÷');
      output = calcTest('-2', null, '÷');
      expect(input).toEqual(output);

      calculator = calcTest(numOne, numTwo, '+');
      input = calculate(calculator, '-');
      output = calcTest('1', null, '-');
      expect(input).toEqual(output);
    });
  });
});

describe('mod \'%\' operator', () => {
  describe('next number is null', () => {
    test('total is devided by 100', () => {
      const calculator = calcTest('5', null, null);
      const input = calculate(calculator, '%');
      const output = calcTest('0.05', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('unconcluded operation', () => {
    test('it performs the unconcluded operation and divides by 100', () => {
      const calculator = calcTest('9.5', '0.25', '+');
      const input = calculate(calculator, '%');
      const output = calcTest('0.0975', null, null);
      expect(input).toEqual(output);
    });
  });
});

describe('\'+/-\' swap operators', () => {
  describe('total the only available', () => {
    test('total swaps sign', () => {
      const calculator = calcTest('3', null, null);
      const input = calculate(calculator, '+/-');
      const output = calcTest('-3', null, null);
      expect(input).toEqual(output);
    });
  });
});

describe('\'=\' operator', () => {
  describe('there is an unconcluded operation', () => {
    test('total gets updated, all ongoing operations are reset', () => {
      const calculator = calcTest('-22', '0.', '+');
      const input = calculate(calculator, '=');
      const output = calcTest('-22', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('only total is available', () => {
    test('total assinged to own value', () => {
      const calculator = calcTest('1', null, null);
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

      calculator = calcTest('1', null, '+');
      input = calculate(calculator, '0');
      output = calcTest('1', '0', '+');
      expect(input).toEqual(output);

      calculator = calcTest('0', null, 'X');
      input = calculate(calculator, '2');
      input = calculate(input, '8');
      output = calcTest('0', '28', 'X');
      expect(input).toEqual(output);
    });
  });

  describe('total only assigned', () => {
    describe('total has value zero', () => {
      const calculator = calcTest('0', null, null);
      const input = calculate(calculator, '2');
      const output = calcTest('2', null, null);
      expect(input).toEqual(output);
    });

    describe('total has value other than zero', () => {
      const calculator = calcTest('2', null, null);
      const input = calculate(calculator, '4');
      const output = calcTest('24', null, null);
      expect(input).toEqual(output);
    });
  });
});

describe('decimal point', () => {
  describe('next number is present, operation ongoing', () => {
    test('next number will take a decimal value', () => {
      const calculator = calcTest('1', '2', '-');
      const input = calculate(calculator, '.');
      const output = calcTest('1', '2.', '-');
      expect(input).toEqual(output);
    });

    test('decimal point already added', () => {
      const calculator = calcTest('1', '2.', '-');
      const input = calculate(calculator, '.');
      expect(input).toEqual(calculator);
    });
  });

  describe('next number not present', () => {
    test('next will be a 0.', () => {
      const calculator = calcTest('1', null, '-');
      const input = calculate(calculator, '.');
      const output = calcTest('1', '0.', '-');
      expect(input).toEqual(output);
    });
  });

  describe('only total is present', () => {
    test('total will have added a decimal point', () => {
      const calculator = calcTest('1');
      const input = calculate(calculator, '.');
      const output = calcTest('1.');
      expect(input).toEqual(output);
    });

    test('decimal point is already present', () => {
      const calculator = calcTest('1.');
      const input = calculate(calculator, '.');
      expect(input).toEqual(calculator);
    });
  });
});

describe('AC', () => {
  describe('next number present', () => {
    test('set next number to zero', () => {
      const calculator = calcTest('1', '2', '+');
      const input = calculate(calculator, 'AC');
      const output = calcTest('1', '0', '+');
      expect(input).toEqual(output);
    });
  });

  describe('operation ongoing, next number not present', () => {
    test('operation null', () => {
      const calculator = calcTest('1', null, 'X');
      const input = calculate(calculator, 'AC');
      const output = calcTest('1', null, null);
      expect(input).toEqual(output);
    });
  });

  describe('there is only total', () => {
    test('total set to zero', () => {
      const calculator = calcTest('1');
      const input = calculate(calculator, 'AC');
      const output = calcTest('0');
      expect(input).toEqual(output);
    });
  });
});
