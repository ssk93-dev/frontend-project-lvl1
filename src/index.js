import readlineSync from 'readline-sync';

const rounds = 3;
const game = (task, questions, rightAnswers, duration) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let i = 0;
  while (i < duration) {
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswers[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.`);
      return console.log(`Let's try again, ${userName}!`);
    } i += 1;
  } return console.log(`Congratulations, ${userName}!`);
};

export { game, rounds };
