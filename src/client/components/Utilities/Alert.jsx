import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <h4>Notice! </h4> <p> {message}</p>
    </div>
  );
};

export default Alert;
