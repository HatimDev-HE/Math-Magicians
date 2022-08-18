import operate from './operate';

describe('test operations', () => {
  test('add operations', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('multiply operation', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
});
