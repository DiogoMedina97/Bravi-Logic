function isValid (value) {
  if (typeof value !== 'string') return false;

  const regex = /\(\)|\{\}|\[\]/g;
  const newValue = value.replace(regex, '');

  if (newValue.match(regex)) return isValid(newValue);

  return newValue.length === 0;
};
module.exports = isValid;
