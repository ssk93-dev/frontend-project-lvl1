import * as engine from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandom3 = () => Math.floor(Math.random() * 3);

export default () => {
  const questions = [];
  const rightAnswers = [];
  const duration = engine.rounds;
  const signs = ['+', '-', '*'];
  for (let i = 0; i < duration; i += 1) {
    const sign = signs[getRandom3()];
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    let rightAnswer = 0;
    if (sign === '+') {
      rightAnswer = String(number1 + number2);
    } else if (sign === '-') {
      rightAnswer = String(number1 - number2);
    } else {
      rightAnswer = String(number1 * number2);
    }
    const question = `${number1} ${sign} ${number2}`;
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  const task = 'What is the result of the expression?';
  engine.game(task, questions, rightAnswers, duration);
};
