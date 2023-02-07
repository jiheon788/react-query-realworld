import { useState } from 'react';

type ReturnTypes = [
  object,
  (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
];

const useInputs = (initialValue: object): ReturnTypes => {
  const [values, setValues] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, onChange];
};

export default useInputs;
