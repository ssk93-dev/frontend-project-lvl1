import readlineSync from 'readline-sync';
import { getRandomProgression } from '../math-functions.js';

const question = () => {
  console.log('What number is missing in the progression?');
};
const logic = () => {
  const progression = getRandomProgression();
  const missingNumberIndex = Math.floor(Math.random() * (progression.length - 1) + 1);
  const rightAnswer = progression[missingNumberIndex];
  progression[progression.indexOf(rightAnswer)] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  } return true;
};

export { question, logic };
