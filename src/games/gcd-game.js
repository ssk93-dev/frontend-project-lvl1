import readlineSync from 'readline-sync';
import { getRandomNumber, getGcd } from '../math-functions.js';

const question = () => {
  console.log('Find the greatest common divisor of given numbers.');
};
const logic = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const rightAnswer = getGcd(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { question, logic };
