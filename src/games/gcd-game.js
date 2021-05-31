import * as engine from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getGcd = (number1, number2) => {
  if (number2) {
    return getGcd(number2, number1 % number2);
  }
  return Math.abs(number1);
};

export default () => {
  const questions = [];
  const rightAnswers = [];
  const duration = engine.rounds;
  for (let i = 0; i < duration; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `${number1} ${number2}`;
    const rightAnswer = String(getGcd(number1, number2));
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  const task = 'Find the greatest common divisor of given numbers.';
  engine.game(task, questions, rightAnswers, duration);
};
