import calculate from './calculate';

describe('Calculate test', () => {
  test('AC button', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, 'AC');

    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    expect(result).toEqual(expected);
  });

  test('Equal button', () => {
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };

    const result = calculate(obj, '=');

    const expected = {
      total: '5',
      next: null,
      operation: null,
    };

    expect(result).toEqual(expected);
  });
});
