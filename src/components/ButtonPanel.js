import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickhandler } = props;
  const handleClick = buttonName => clickhandler(buttonName);
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
          clickHandler={handleClick}
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

ButtonPanel.propTypes = {
  clickhandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
