import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};
const makeRound = () => {
  const question = getRandomNumber(0, 4000);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => run(description, makeRound);
