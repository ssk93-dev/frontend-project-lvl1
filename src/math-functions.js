const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandom3 = () => Math.floor(Math.random() * 3);
const getGcd = (number1, number2) => {
  if (number2) {
    return getGcd(number2, number1 % number2);
  }
  return Math.abs(number1);
};
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

export {
  isEven, getRandomNumber, getRandom3, getGcd, getRandomProgression,
};
