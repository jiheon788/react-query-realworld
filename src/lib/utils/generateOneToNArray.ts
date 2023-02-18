const generateOneToNArray = (length: number) => {
  return Array.from({ length }, (_, i) => i + 1);
};

export default generateOneToNArray;
