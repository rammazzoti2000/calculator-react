import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;

  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  const keys = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const keyButtons = keys.map(row => (
    <div key={row.toString()} className="row">
      { row.map(button => (
        <Button
          key={button}
          name={button}
          value={button}
          wide={button === '0'}
          clickHandler={handleClick}
        />
      ))}
    </div>
  ));

  return (
    <div className="ButtonPannel">
      {keyButtons}
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
