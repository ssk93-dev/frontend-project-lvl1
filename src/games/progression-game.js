import * as engine from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomArrayLength = () => Math.floor(Math.random() * (11 - 5)) + 5;
const getRandomDifference = () => Math.floor(Math.random() * (50 - 1)) + 1;
const getRandomProgression = () => {
  const a = getRandomNumber();
  const d = getRandomDifference();
  const n = getRandomArrayLength();
  const progression = [a];
  for (let i = 1; i < n; i += 1) {
    progression.push(a + d * i);
  }
  return progression;
};

export default () => {
  const questions = [];
  const rightAnswers = [];
  const duration = engine.rounds;
  for (let i = 0; i < duration; i += 1) {
    const progression = getRandomProgression();
    const missingNumberIndex = Math.floor(Math.random() * (progression.length - 1) + 1);
    const rightAnswer = String(progression[missingNumberIndex]);
    progression[progression.indexOf(Number(rightAnswer))] = '..';
    const question = `${progression.join(' ')}`;
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  const task = 'What number is missing in the progression?';
  engine.game(task, questions, rightAnswers, duration);
};
