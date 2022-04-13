import React from 'react';

const ErrorList = ({ errors }) => {
  return (
    <ul class='error-messages'>
      {errors &&
        Object.keys(errors).map((key) => (
          <li key={key}>
            {key} {errors[key]}
          </li>
        ))}
    </ul>
  );
};

export default ErrorList;
