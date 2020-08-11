import React from 'react';
import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <div>
      { calculation }
    </div>
  );
}

Display.defaultProps = {
  calculation: '0',
};

Display.propTypes = {
  calculation: PropTypes.string,
};

export default Display;
