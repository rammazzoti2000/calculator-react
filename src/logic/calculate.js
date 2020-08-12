import operate from './operate';

function calculate(dataObj, buttonName) {
  let { total, next, operation } = dataObj;

  if (buttonName === '+/-') {
    if (next) {
      next = operate(next, '-1', 'X');
    }
    if (total) {
      total = operate(total, '-1', 'X');
    }
  }

  return { total, next, operation };
}

export default calculate;
