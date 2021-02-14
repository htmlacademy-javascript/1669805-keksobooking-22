const SIMILAR_ADS_COUNT = 10;
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

// массивы значений /////////////
const sloganTitles = [
  'Чище чем у остальных',
  'Дешевле чем у остальных',
  'Уютнее чем у остальных',
  'Вкуснее чем у остальных',
  'Гламурнее чем у остальных',
  'Грязнее чем у остальных',
];

const housingTitles = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkinTitles = [
  '12:00',
  '13:00',
  '14:00',
];
const checkoutTitles = [
  '12:00',
  '13:00',
  '14:00',
];
const featureTitles = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const descriptionTitles = [
  'Убогая берлога',
  'Чисто, что негде плюнуть',
  'После пожара, но жить можно',
  'Отлиная квартра для семьи',
  'Идеально для любовников',
  'Вчера здесь умерла бабушка',
];

// создание объекта author ////////////
const createAuthor = () => {
  return {
    avatar: `img/avatars/user${addLeadingZero(getRandomInteger(1,8))}.png`,
  };
};
// создание массива features //////////
const getFeatures = () => {
  const generator = makeUniqueRandomIntegerGenerator(0, featureTitles.length - 1);
  return new Array (getRandomInteger(0, featureTitles.length - 1)).fill('').map(() => featureTitles[generator()]);
};
// создание массива Photos
const getPhotos = () => {
  const generator = makeUniqueRandomIntegerGenerator(1, 3);
  return new Array (getRandomInteger(1, 3)).fill('').map(() => `http://o0.github.io/assets/images/tokyo/hotel${generator()}.jpg`);
};

// создание JS объекта /////////////////
const getAd = () => {
  const location = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
  const offer =  {
    title: getRandomItem(sloganTitles),
    address: `${location.x}, ${location.y}`,
    price: getRandomInteger(3000, 13000),
    type: getRandomItem(housingTitles),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 5),
    checkin: getRandomItem(checkinTitles),
    checkout: getRandomItem(checkoutTitles),
    features: getFeatures(),
    description: getRandomItem(descriptionTitles),
    photos: getPhotos(),
  };
  const ad = {
    autor: createAuthor(),
    offer,
    location,
  };
  return ad;
};

const getAds = (count) => new Array(count).fill(null).map(getAd);


alert(JSON.stringify(getAds(SIMILAR_ADS_COUNT)));
