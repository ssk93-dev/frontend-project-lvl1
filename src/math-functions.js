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

export {
  isEven, getRandomNumber, getRandom3, getGcd,
};
