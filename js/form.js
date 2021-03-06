const typeOfAccommodation = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const timeInElement = document.querySelector('#timein');
const timeOutElement = document.querySelector('#timeout');

const TIMES = ['12:00', '13:00', '14:00'];

const minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

// функция синхронизации полей /////
const changeFormElements = () => {
  // синхронизация type и price
  typeOfAccommodation.onchange = function () {
    const price = minPrice[this.value];
    priceInput.setAttribute('min', price);

    // устанавливает плейсхолдер, а не значение
    priceInput.setAttribute('placeholder', price);
    if (priceInput.value) {
      priceInput.value = Math.max(price, parseFloat(priceInput.value));
    }
  };
  typeOfAccommodation.dispatchEvent(new Event('change'));

  // синхронизация полей въезда и выезда ////
  // функция синхронизации
  const synchronizeFields = (firstElement, secondElement, firstValue, secondValue, callback) => {
    const firstElementChangeHandler = () => {
      const newFirstValue = secondValue[firstValue.indexOf(firstElement.value)];
      callback(secondElement, newFirstValue)
    };
    firstElement.addEventListener('change', firstElementChangeHandler);

    const secondElementChangeHandler = () => {
      const newSecondValue = firstValue[secondValue.indexOf(secondElement.value)];
      callback(firstElement, newSecondValue)
    };
    secondElement.addEventListener('change', secondElementChangeHandler);
  };
  // колбэк синхронизации
  const syncValue = (element, value) => {
    element.value = value;
  };
  synchronizeFields(timeInElement, timeOutElement, TIMES, TIMES, syncValue);
};

export { changeFormElements };
