import generateOneToNArray from '../src/lib/utils/generateOneToNArray';
import convertToDate from '../src/lib/utils/convertToDate';

describe('Utils Func Test', () => {
  test('Func generateOneToNAray(length) must return an array of one to N with the length of the input value.', () => {
    const arr: number[] = generateOneToNArray(3);

    expect(arr).toEqual([1, 2, 3]);
  });

  test('Func ConvertToDate(timestamp) changes timestamp to the form of Month Day, Year.', () => {
    const convertedDate = convertToDate('2023-02-15T16:38:09.644Z');

    expect(convertedDate).toEqual('February 15, 2023');
  });
});
