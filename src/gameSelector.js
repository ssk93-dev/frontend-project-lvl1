import readlineSync from 'readline-sync';
import * as evenGame from './games/even-game.js';
import * as calcGame from './games/calc-game.js';
import * as gcdGame from './games/gcd-game.js';
import * as progressionGame from './games/progression-game.js';
import * as primeGame from './games/prime-game.js';

const games = ['Even game', 'Calc game', 'GCD game', 'Progression game', 'Prime game'];
const gameLauncher = (selectedGame) => {
  switch (selectedGame) {
    case games[0]:
      return [evenGame.question, evenGame.logic];
    case games[1]:
      return [calcGame.question, calcGame.logic];
    case games[2]:
      return [gcdGame.question, gcdGame.logic];
    case games[3]:
      return [progressionGame.question, progressionGame.logic];
    case games[4]:
      return [primeGame.question, primeGame.logic];
    default:
      return undefined;
  }
};

export default (choose = undefined) => {
  if (choose !== undefined) {
    return gameLauncher(choose);
  }
  const game = readlineSync.keyInSelect(games, 'Which game would you like to play?');
  return gameLauncher(games[game]);
};
