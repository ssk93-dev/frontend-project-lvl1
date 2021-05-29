import readlineSync from 'readline-sync';
import { isEven, getRandomNumber } from '../math-functions.js';

const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const logic = () => {
  const number = getRandomNumber();
  const rightAnswer = isEven(number);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { question, logic };
