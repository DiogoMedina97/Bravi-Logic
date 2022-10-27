const isValid = require('./index');

describe('Bravi', () => {
  test('(){}[] é válido', () => {
    expect(isValid('(){}[]')).toBe(true);
  });

  test('[{()}](){} é válido', () => {
    expect(isValid('[{()}](){}')).toBe(true);
  });

  test('[]{() não é válido', () => {
    expect(isValid('[]{()')).toBe(false);
  });

  test('[{)] não é válido', () => {
    expect(isValid('[{)]')).toBe(false);
  });
});
