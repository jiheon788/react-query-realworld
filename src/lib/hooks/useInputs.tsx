import { useState } from 'react';

type DefaultType = {
  [key: string]: any;
};

type ReturnTypes = [
  any,
  (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  (value: any) => void,
];

const useInputs = (initialValue: DefaultType): ReturnTypes => {
  const [values, setValues] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, onChange, setValues];
};

export default useInputs;
