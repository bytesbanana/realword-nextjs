import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    if (defaultValue) {
      try {
        currentValue = JSON.parse(
          localStorage.getItem(key) || String(defaultValue)
        );
      } catch (error) {
        console.log(error);
        currentValue = defaultValue;
      }
    }
    return currentValue;
  });

  useEffect(() => {
    try {
      if (value) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
