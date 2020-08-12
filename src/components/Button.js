import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { button, wide, color } = props;
  const buttonClass = `Button ${wide ? 'double-size' : ''} ${color === 'gray' ? 'grayKey' : 'orangeKey'}`;

  return (
    <button type="button" className={buttonClass}>
      { button }
    </button>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.number.isRequired,
};

export default Button;
