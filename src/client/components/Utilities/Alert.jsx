import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <h4>Notice! </h4> <p> {message}</p>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

export default Alert;
