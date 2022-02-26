import React from 'react';
import * as _ from 'lodash';

const ErrorList = ({ errors }) => {
  return (
    <ul className='error-messages'>
      {Object.keys(errors).map((key) => {
        if (_.isArray(errors[key])) {
          return errors[key].map((e) => <li key={e}>{`${key} ${e}`}</li>);
        }
        if (_.isObject(errors[key])) return null;
      })}
    </ul>
  );
};

export default ErrorList;
