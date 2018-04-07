const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = function div(num1, num2) {
  return (num2 === 0) ? 'We can\'t division by 0' : num1 / num2;
};

export { sum, sub, mult, div };
