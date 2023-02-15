const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const convertToDate = (datetime: string) => {
  const [year, month, day] = datetime.split('T')[0].split('-').map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
};

export const isEmptyObj = (obj: object) => Object.keys(obj).length === 0;

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
