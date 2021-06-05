import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getRandomProgression = () => {
  const firstTerm = getRandomNumber(0, 100);
  const difference = getRandomNumber(1, 50);
  const size = getRandomNumber(5, 10);
  const progression = [firstTerm];
  for (let i = 1; i < size; i += 1) {
    progression.push(firstTerm + difference * i);
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
