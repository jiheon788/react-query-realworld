import { useState } from 'react';

type ReturnTypes = [
  string | number,
  (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
];

const useInput = (initialValue: string | number): ReturnTypes => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};

export default useInput;
