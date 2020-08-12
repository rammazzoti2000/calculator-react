import operate from './operate';

function calculate(dataObj, buttonName) {
  let { total, next, operation } = dataObj;

  if (operation) {
    total = operate(total, next, operation);
    next = null;
    operation = buttonName;
  }

  if (buttonName === '+/-') {
    if (next) {
      next = operate(next, '-1', 'X');
    }
    if (total) {
      total = operate(total, '-1', 'X');
    }
  }

  if (buttonName === '=') {
    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (buttonName === '%') {
    if (next) {
      total = operate(total, next, operation);
      total = operate(total, '100', '÷');
      next = null;
      operation = null;
    } else {
      total = operate(total, '100', '÷');
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return { total, next, operation };
}

export default calculate;
