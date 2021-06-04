import readlineSync from 'readline-sync';

const rounds = 3;
const run = (description, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const round = makeRound();
    const question = round[0];
    const rightAnswer = round[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  } return console.log(`Congratulations, ${userName}!`);
};

export default run;
