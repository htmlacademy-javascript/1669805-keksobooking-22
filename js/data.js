
import {getRandomFloat, getRandomInteger, addLeadingZero, getRandomItem, makeUniqueRandomIntegerGenerator} from './util.js';
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
    author: createAuthor(),
    offer,
    location,
  };
  return ad;
};

const getAds = (count) => new Array(count).fill(null).map(getAd);



export {getAds};
