import readlineSync from 'readline-sync';
import * as evenGame from './games/even-game.js';
import * as calcGame from './games/calc-game.js';
import * as gcdGame from './games/gcd-game.js';

const games = ['Even game', 'Calc game', 'GCD game'];
const gameLauncher = (selectedGame) => {
  switch (selectedGame) {
    case games[0]:
      return [evenGame.greeting, evenGame.logic];
    case games[1]:
      return [calcGame.greeting, calcGame.logic];
    case games[2]:
      return [gcdGame.greeting, gcdGame.logic];
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
