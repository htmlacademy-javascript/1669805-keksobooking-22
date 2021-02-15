
/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Источник: https://learn.javascript.ru/number */
const getRandomFloat = (min, max, precision = 2) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};
/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// функция случайного выбора элемента из значений //////////////////////////////
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
// Функция вставки случайного числа в строку ///////////////////////////////////
const addLeadingZero = (num) => `0${num}`.slice(-2);

// функция выбора случайного колличества элементов без повторений
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomFloat, getRandomInteger, addLeadingZero, getRandomItem, makeUniqueRandomIntegerGenerator};

