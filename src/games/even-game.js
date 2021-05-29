import readlineSync from 'readline-sync';
import { isEven } from '../math-functions.js';

const greeting = () => {
  console.log('Welcome to the Even game!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const logic = () => {
  const number = Math.floor(Math.random() * 100);
  const rightAnswer = isEven(number);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { greeting, logic };
