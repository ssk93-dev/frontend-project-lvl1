import run from '../index.js';
import getRandomNumber from '../utils.js';

const descriptiopn = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  if (number2) {
    return getGcd(number2, number1 % number2);
  }
  return Math.abs(number1);
};
const makeRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  return [question, rightAnswer];
};

export default () => run(descriptiopn, makeRound);
