import React from 'react';
import Button from './Button';

const keys = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const keyOperators = keys.map(row => (
  <div className="row" key={row.toString()}>
    { row.map(button => <Button button={button} key={button} />) }
  </div>
));

function ButtonPannel() {
  return (
    <div className="ButtonPannel">
      { keyOperators }
    </div>
  );
}

export default ButtonPannel;
