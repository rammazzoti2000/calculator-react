import React from 'react';
import PropTypes from 'props-types';

function Button({ button }) {
  return (
    <button type="button">
      { button }
    </button>
  );
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Button;
