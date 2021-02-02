// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone
let getRandomInteger = function(min, max) {
  let number = min + Math.random() * (max - min + 1);
  //  Условие, если максимальное число окажется меньше минимального
  if (max < min) {
    alert(number = 'Неправильно заданы аргументы ' + min + ' не может быть меньше, чем ' + max)
  }
  return Math.floor(number);
}
let number = getRandomInteger(3, 9);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number
let getRandomDotInteger = function(min, max ) {
  let numberDot = min + Math.random() * (max - min + 1);
  //  Условие, если максимальное число окажется меньше минимального
  if (max < min) {
    alert(numberDot = 'Неправильно заданы аргументы ' + min + ' не может быть меньше, чем ' + max)
  }
  return numberDot.toFixed(2);
}
let numberDot = getRandomDotInteger(3, 6);

