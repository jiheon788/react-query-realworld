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

const convertToDate = (datetime: string) => {
  const [year, month, day] = datetime.split('T')[0].split('-').map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
};

export default convertToDate;
