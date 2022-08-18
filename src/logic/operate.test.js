import operate from './operate';

describe('test operation', () => {
  test('add operations', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('substract operation', () => {
    expect(operate(2, 4, '-')).toBe('-2');
  });

  test('multiply operation', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('division operation', () => {
    expect(operate(8, 2, '÷')).toBe('4');
  });
});
