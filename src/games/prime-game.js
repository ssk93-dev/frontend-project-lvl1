import * as engine from '../index.js';

const getRandomNumber4000 = () => Math.floor(Math.random() * 4000);
const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  } return 'yes';
};
export default () => {
  const questions = [];
  const rightAnswers = [];
  const duration = engine.rounds;
  for (let i = 0; i < duration; i += 1) {
    const question = getRandomNumber4000();
    const rightAnswer = isPrime(question);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine.game(task, questions, rightAnswers, duration);
};
