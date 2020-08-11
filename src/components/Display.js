import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { calculation } = props;
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
