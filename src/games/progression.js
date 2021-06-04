import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getRandomProgression = () => {
  const a = getRandomNumber(0, 100);
  const d = getRandomNumber(1, 50);
  const n = getRandomNumber(5, 10);
  const progression = [a];
  for (let i = 1; i < n; i += 1) {
    progression.push(a + d * i);
  }
  return progression;
};

const makeRound = () => {
  const progression = getRandomProgression();
  const missingNumberIndex = getRandomNumber(1, progression.length - 2);
  const rightAnswer = String(progression[missingNumberIndex]);
  progression[progression.indexOf(Number(rightAnswer))] = '..';
  const question = `${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default () => run(description, makeRound);
