/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone */

const getRandomInRange = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return Math.floor(Math.random() * (max - min) + min);
}
getRandomInRange(4, 9);



/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Источник: https://learn.javascript.ru/number */

const getRandomFloat = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return (Math.random() * (max - min) + min).toFixed(2);
}
alert(getRandomFloat(3, 4));
