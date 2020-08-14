import operate from './operate';

const isNumber = text => {
  const nums = new Map();
  nums.set('0', '0');
  nums.set('1', '1');
  nums.set('2', '2');
  nums.set('3', '3');
  nums.set('4', '4');
  nums.set('5', '5');
  nums.set('6', '6');
  nums.set('7', '7');
  nums.set('8', '8');
  nums.set('9', '9');
  if (nums.get(text)) {
    return true;
  }
  return false;
};

const isOperation = text => {
  const nums = new Map();
  nums.set('+', '+');
  nums.set('-', '-');
  nums.set('x', 'x');
  nums.set('÷', '÷');
  nums.set('%', '%');
  if (nums.get(text)) {
    return true;
  }
  return false;
};

const isMinusPlus = text => {
  if (text === '+/-') {
    return true;
  }
  return false;
};

const isAC = text => {
  if (text === 'AC') {
    return true;
  }
  return false;
};

const isPoint = text => {
  if (text === '.') {
    return true;
  }
  return false;
};

const isEqual = text => {
  if (text === '=') {
    return true;
  }
  return false;
};

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (isNumber(buttonName)) {
    if (!total || total === '0' || Number.isNaN(Number(total))) {
      total = buttonName;
    } else if (operation !== null) {
      total += buttonName;
    } else {
      total += buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  }
  if (isOperation(buttonName)) {
    if (total) {
      next = total;
      total = '0';
      operation = buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (isMinusPlus(buttonName)) {
    if (total) {
      total = (total * -1).toString();
    }
    if (next) {
      next = (total * -1).toString();
    }
  }

  if (isAC(buttonName)) {
    total = '0';
    next = '0';
    operation = null;
  }

  if (isPoint(buttonName)) {
    if (total && !total.includes('.')) {
      total += '.';
    } else if (!total) {
      total = '0.';
    }
  }

  if (isEqual(buttonName)) {
    total = String(operate(next, total, operation));
    operation = '';
    next = '0';
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
