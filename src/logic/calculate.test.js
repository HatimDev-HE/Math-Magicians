import calculate from './calculate';

describe('test calculate', () => {
  test('test AC', () => {
    const object = {
      total: 0,
      next: null,
      operation: null,
    };

    const outCome = calculate(object, 'AC');
  });
});
