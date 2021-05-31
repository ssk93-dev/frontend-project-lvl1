import * as engine from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};
const getRandomNumber = () => Math.floor(Math.random() * 100);
export default () => {
  const questions = [];
  const rightAnswers = [];
  const duration = engine.rounds;
  for (let i = 0; i < duration; i += 1) {
    const question = getRandomNumber();
    const rightAnswer = isEven(question);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine.game(task, questions, rightAnswers, duration);
};
