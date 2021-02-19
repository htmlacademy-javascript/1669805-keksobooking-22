import { declOfNum } from './util.js'
const userMap = document.querySelector('#map-canvas');
const cardList = document.querySelector('#card').content;




const openPopup = (ad) => {
  const fragment = document.createDocumentFragment();

  const offer = ad.offer;
  const author = ad.author;

  const offerTypes = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  };

  const cardElement = cardList.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат${declOfNum(offer.rooms, ['а', 'ы', ''])} для ${offer.guests} гост${declOfNum(offer.guests, ['я', 'ей', 'ей'])}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__type').textContent = offerTypes[offer.type];
  // создание features
  const futureContainer = cardElement.querySelector('.popup__features');
  if (offer.features.length > 0) {
    futureContainer.innerHTML = '';
    for (const feature of offer.features) {
      const li = document.createElement('li');
      li.classList.add('popup__feature');
      li.classList.add(`popup__feature--${feature}`);
      futureContainer.appendChild(li);
    }
  } else {
    futureContainer.hidden = true
  }
  // создание photo
  const photoContainer = cardElement.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  for (const photo of offer.photos) {
    const picture = document.createElement('img');

    picture.src = photo;
    picture.classList.add('popup__photo');
    picture.width = '45';
    picture.height = '40';
    photoContainer.appendChild(picture);
  }

  cardElement.querySelector('.popup__avatar').src = author.avatar;
  fragment.appendChild(cardElement);

  userMap.appendChild(fragment);
}


export { openPopup };
