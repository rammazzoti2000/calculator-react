import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  let { calculation } = props;
  if (calculation === null || calculation === 'null') { calculation = '0'; }
  return (
    <div className="Display">
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
