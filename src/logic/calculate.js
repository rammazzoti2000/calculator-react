// import operate from './operate';
//
// function calculate(dataObj, buttonName) {
//   let { total, next, operation } = dataObj;
//
//   if (buttonName === '+/-') {
//     if (next) {
//       next = operate(next, '-1', 'X');
//     } else if (total) {
//       total = operate(total, '-1', 'X');
//     }
//   }
//
//   if (buttonName === '=') {
//     if (next) {
//       total = operate(total, next, operation);
//       next = undefined;
//       operation = undefined;
//     }
//   }
//
//   if (buttonName === '%') {
//     if (next) {
//       total = operate(total, next, operation);
//       total = operate(total, '100', '÷');
//       next = undefined;
//       operation = undefined;
//     } else {
//       total = operate(total, '100', '÷');
//     }
//   }
//
//   if (buttonName === 'AC') {
//     if (next) {
//       next = '0';
//     } else if (operation) {
//       operation = undefined;
//     } else {
//       total = '0';
//     }
//   }
//
//   if (buttonName === '.') {
//     if (next) {
//       if (!next.includes('.')) {
//         next += '.';
//       }
//     } else if (operation) {
//       next = '0.';
//     } else if (!total.includes('.')) {
//       total += '.';
//     }
//   }
//
//   if (buttonName === '0' || buttonName === '1' || buttonName === '2'
//    || buttonName === '3' || buttonName === '4' || buttonName === '5'
//    || buttonName === '6' || buttonName === '7' || buttonName === '8'
//    || buttonName === '9') {
//     if (next) {
//       next += buttonName;
//     } else if (operation) {
//       next = buttonName;
//     } else if (total === '0') {
//       total = buttonName;
//     } else {
//       total += buttonName;
//     }
//   }
//
//   return { total, next, operation };
// }
//
// export default calculate;


import operate from './operate';

function calculate(calculatorObj, buttonName) {
  let { total, next, operation } = calculatorObj;

  switch (buttonName) {
    case '%':
      if (next) {
        total = operate(total, next, operation);
        total = operate(total, '100', '÷');
        next = undefined;
        operation = undefined;
      } else {
        total = operate(total, '100', '÷');
      }
      break;
    case '+/-':
      if (next) {
        next = operate(next, '-1', 'X');
      } else {
        total = operate(total, '-1', 'X');
      }

      break;
    case '=':
      // don't do anything if the only value is the total
      if (next) {
        total = operate(total, next, operation);
        next = undefined;
        operation = undefined;
      }

      break;
    case 'AC':
      if (next) {
        next = '0';
      } else if (operation) {
        operation = undefined;
      } else {
        total = '0';
      }

      break;
    case '.':
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else if (operation) {
        next = '0.';
      } else if (!total.includes('.')) {
        total += '.';
      }

      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += buttonName;
      } else if (operation) {
        next = buttonName;
      } else if (total === '0') {
        total = buttonName;
      } else {
        total += buttonName;
      }

      break;
    default:
      total = operate(total, next, operation);
      next = undefined;
      operation = buttonName;
      break;
  }

  return { total, next, operation };
}

export default calculate;
