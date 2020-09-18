import { useState } from 'react';

export const useField = (type, initialValue) => {
  const [value, setValue] = useState(initialValue || '');

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const reset = () => {
    setValue('');
  };

  const parseForInput = () => {
    return {
      type,
      value,
      onChange
    };
  };

  return {
    type, 
    value,
    reset,
    parseForInput
  };
};