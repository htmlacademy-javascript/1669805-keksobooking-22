const userForm = document.querySelector('.ad-form');
const typeOfAccommodation = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000
};

const changeFormElements = () => {
  typeOfAccommodation.onchange = function () {
    const price = minPrice[this.value];
    priceInput.setAttribute('min', price);
    priceInput.value = Math.max(price, priceInput.value);
  };

  userForm.onchange = function (e) {
    this.timein.value = e.target.value
    this.timeout.value = e.target.value
  };
};

export { changeFormElements };
