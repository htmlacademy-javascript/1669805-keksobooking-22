const userForm = document.querySelector('.ad-form');
const type = userForm.querySelector('#type');
const price = userForm.querySelector('#price');


const changeFormElements = () => {
  document.querySelector('.ad-form').onchange = function (e) {
    this.timein.value = e.target.value
    this.timeout.value = e.target.value
  };

  type.addEventListener('change', () => {
    if (type.value === 'flat') {
      price.placeholder = '1 000'
    } else if (type.value === 'bungalow') {
      price.placeholder = '0'
    } else if (type.value === 'house') {
      price.placeholder = '5 000'
    } else if (type.value === 'palace') {
      price.placeholder = '10 000'
    }
  })
};

export {changeFormElements};
