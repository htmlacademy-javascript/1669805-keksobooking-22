/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return Math.floor(Math.random() * (max - min) + min);
}


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
const addressTitels = [
  /* строка — адрес предложения. Для простоты пусть пока составляется из
  географических координат по маске {{location.x}}, {{location.y}} */
];
const priceTitles = [
  // число — стоимость. Любое положительное число.
];
const housingTitles = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const roomsTitle = [
  // число — количество комнат. Любое положительное число
];
const guests = [
  // число — количество гостей, которое можно разместить. Любое положительное число.
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
const photoTitles = [
];
// const createTitle = () => {
//   return sloganTitles[getRandomInteger(0, sloganTitles.length)];
// }
// const createLocation = () => {
//   return { x: 10, y: 16 };
// }
// const createPrice = () => {
//   return priceTitles[getRandomInteger(3000, 15000)]
// }
// const createType = () => {
//   return housingTitles[getRandomInteger(0, housingTitles.length)]
// }
// const createRooms = () => {
//   return roomsTitle[getRandomInteger(1,5)]
// }
// const createCheckin = () => {
//   return checkinTitles[getRandomInteger(0, checkinTitles.length)]
// }
// const createCheckout = () => {
//   return checkoutTitles[getRandomInteger(0, checkoutTitles.length)]
// }
// const createFeature = () => {
//   return featureTitles[getRandomInteger(0, featureTitles.length)]
// }
// const createDescription = () => {
//   return descriptionTitles[getRandomInteger(0, descriptionTitles.length)]
// }
// const createAvatar = () => {
//   return 'img/avatars/user{{xx}}.png'
// }


// Объект Author/////////////////////////////////////////////////////////////////////////////////
const createAuthor = () => {
  return {
    avatar: (new Array(getRandomInteger(1, 1)).fill('').map(_ => `img/avatars/user${getRandomInteger(1, 10)}.png`)),
  };
};
const createAuthors = (count) => {
  return (new Array(count)).fill('').map(_ => createAuthor())
}
console.log(createAuthors(10));


// Объект Offer/////////////////////////////////////////////////////////////////////////////////
const createOffer = () => {
  return {
    title: sloganTitles[getRandomInteger(0, sloganTitles.length)],
    // address: getRandomFloat(`${location.x}, ${location.y}`),
    price: getRandomFloat(3000, 13000),
    type: housingTitles[getRandomInteger(0, housingTitles.length)],
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 5),
    checkin: checkinTitles[getRandomInteger(0, checkinTitles.length)],
    checkout: checkoutTitles[getRandomInteger(0, checkoutTitles.length)],
    features: featureTitles[getRandomInteger(0, featureTitles.length)],
    description: descriptionTitles[getRandomInteger(0, descriptionTitles.length)],
    photos: (new Array(getRandomInteger(1, 3)).fill('').map(_ => `http://o0.github.io/assets/images/tokyo/hotel${getRandomInteger(1, 3)}.jpg`)),
  };
}
const createOffers = (count) => {
  return (new Array(count)).fill('').map(_ => createOffer())
}
console.log(createOffers(10));


// Объект location/////////////////////////////////////////////////////////////////////////////////
const createLocation = () => {
  return {
    x:getRandomFloat(35.65000, 35.70000, 5),
    y:getRandomFloat(139.70000, 139.80000, 5),
  };
};
const createLocations = (count) => {
  return (new Array(count)).fill('').map(_ => createLocation())
}
console.log(createLocations(10));
