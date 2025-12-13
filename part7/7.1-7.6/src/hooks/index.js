import { useState } from 'react';


const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = (event) => {
    setValue('');
  };

  return { inputProps: { type, value, onChange }, onClick };
};

export { useField };
