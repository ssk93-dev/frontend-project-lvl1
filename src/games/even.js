import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const makeRound = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => run(description, makeRound);
