/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return Math.floor(Math.random() * (max - min) + min);
}
const getRandomRound = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return Math.round(Math.random() * (max - min) + min);
}
// Fisher-Yates shuffle algorithm
let shuffleArray = (array) => {
  let curId = array.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
};

const addLeadingZero = (num) => `0${num}`.slice(-2)


/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Источник: https://learn.javascript.ru/number */
const getRandomFloat = (min, max, precision = 2) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

// offer, объект — содержит информацию об объявлении. Состоит из полей:
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


// Объект Author/////////////////////////////////////////////////////////////////////////////////
const createAuthor = () => {
  return {
    avatar: `img/avatars/user${addLeadingZero(getRandomInteger(1,8))}.png`,
  };
};
const createAuthors = (count) => {
  return (new Array(count)).fill('').map(() => createAuthor())
}
// console.log(createAuthors(10));
alert(JSON.stringify(createAuthors(10)));


// Объект Offer/////////////////////////////////////////////////////////////////////////////////
const createOffer = () => {
  return {
    title: sloganTitles[getRandomInteger(0, sloganTitles.length)],
    address:  `location.x${getRandomFloat(35.65000, 35.70000, 5)},location.y${getRandomFloat(139.70000, 139.80000, 5)} `,
    price: getRandomInteger(3000, 13000),
    type: housingTitles[getRandomInteger(0, housingTitles.length)],
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 5),
    checkin: checkinTitles[getRandomInteger(0, checkinTitles.length)],
    checkout: checkoutTitles[getRandomInteger(0, checkoutTitles.length)],
    features: shuffleArray(featureTitles).splice(0, getRandomRound(0, featureTitles.length)),
    description: descriptionTitles[getRandomInteger(0, descriptionTitles.length)],
    // photos: (new Array(getRandomRound(1, 3)).fill('').map(() => `http://o0.github.io/assets/images/tokyo/hotel${getRandomRound(1, 3)}.jpg`)),
    photos: (new Array(getRandomRound(1, 3)).fill('').map(() => `http://o0.github.io/assets/images/tokyo/hotel${getRandomRound(1, 3)}.jpg`)),
  };
}
const createOffers = (count) => {
  return (new Array(count)).fill('').map(() => createOffer())
}
// console.log(createOffers(10));
alert(JSON.stringify(createOffers(10)));


// Объект location/////////////////////////////////////////////////////////////////////////////////
const createLocation = () => {
  return {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
};
const createLocations = (count) => {
  return (new Array(count)).fill('').map(() => createLocation());
};
// console.log(createLocations(10));
alert(JSON.stringify(createLocations(10)));
