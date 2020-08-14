import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, color, wide, clickHandler,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    'Button',
    (name === '÷' || name === 'X' || name === '-' || name === '+' || name === '=') ? color : 'gray',
    wide ? 'wide' : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button type="button" onClick={handleClick}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = { color: 'orange' };

export default Button;
