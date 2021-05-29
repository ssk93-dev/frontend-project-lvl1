import readlineSync from 'readline-sync';
import gameSelector from './gameSelector.js';

export default (selectedGame = undefined) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  const game = gameSelector(selectedGame);
  const currentGameGreeting = game[0];
  const currentGameLogic = game[1];
  currentGameGreeting();
  let userWin = true;
  let i = 0;
  while (i < 3 && userWin !== false) {
    userWin = currentGameLogic();
    i += 1;
  }
  if (userWin === false) {
    return console.log(`Let's try again, ${userName}!`);
  } return console.log(`Congratulations, ${userName}!`);
};
