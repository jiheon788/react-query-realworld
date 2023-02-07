import { useState } from 'react';

type ReturnTypes = [boolean, () => void];

const useBoolean = (initialValue: boolean): ReturnTypes => {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);

  return [value, onToggle];
};

export default useBoolean;
