import readlineSync from 'readline-sync';
import { isPrime, getRandomNumber4000 } from '../math-functions.js';

const question = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};
const logic = () => {
  const numberPrime = getRandomNumber4000();
  const rightAnswer = isPrime(numberPrime);
  console.log(`Question: ${numberPrime}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { question, logic };
