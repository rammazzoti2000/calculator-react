import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    button, wide, color, clickHandler,
  } = props;
  const buttonClass = `Button ${wide ? 'doubleButton' : ''} ${color === 'gray' ? 'grayKey' : 'orangeKey'}`;
  const handleClick = name => clickHandler(name);

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={() => {
        handleClick({ button });
      }}
    >
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
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
