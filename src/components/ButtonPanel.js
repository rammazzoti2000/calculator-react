import React from 'react';
import Button from './Button';

function ButtonPanel(clickHandler) {
  const keys = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const keyOperators = keys.map(row => (
    <div className="row" key={row.toString()}>
      { row.map(button => (
        <Button
          button={button}
          key={button}
          wide={button === '0'}
          color={(button === '÷' || button === 'X' || button === '-' || button === '+' || button === '=') ? 'orange' : 'gray'}
          onClick={() => clickHandler.onClick(button)}
        />
      )) }
    </div>
  ));

  return (
    <div className="ButtonPanel">
      { keyOperators }
    </div>
  );
}

export default ButtonPanel;
