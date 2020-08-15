import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { value } = props;

  return (
    <div className="Display">
      <div>{value}</div>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
