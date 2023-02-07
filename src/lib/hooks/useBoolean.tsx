import { useState } from 'react';

const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);

  return [value, onToggle];
};

export default useBoolean;
