import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': {
      return number1 + number2;
    }
    case '-': {
      return number1 - number2;
    }
    case '*': {
      return number1 * number2;
    }
    default: {
      throw new Error(`Unknown operator: '${operator}'`);
    }
  }
};
const makeRound = () => {
  const operator = operators[getRandomNumber(0, 2)];
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(calculate(number1, number2, operator));
  return [question, rightAnswer];
};

export default () => run(description, makeRound);
