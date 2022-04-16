import React from 'react';

const ErrorList = ({ errors }) => {
  return (
    <ul className='error-messages'>
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
