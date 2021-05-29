import readlineSync from 'readline-sync';
import { getRandomNumber, getRandom3 } from '../math-functions.js';

const question = () => {
  console.log('What is the result of the expression?');
};
const logic = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandom3()];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  let rightAnswer = 0;
  if (sign === '+') {
    rightAnswer = number1 + number2;
  } else if (sign === '-') {
    rightAnswer = number1 - number2;
  } else {
    rightAnswer = number1 * number2;
  }
  console.log(`Question: ${number1} ${sign} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { question, logic };
