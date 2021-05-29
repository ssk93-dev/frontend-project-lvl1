const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandom3 = () => Math.floor(Math.random() * 3);

export { isEven, getRandomNumber, getRandom3 };
