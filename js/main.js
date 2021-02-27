import { createMap } from './map.js'
import { getAds } from './data.js'
const SIMILAR_ADS_COUNT = 10;
const ads = getAds(SIMILAR_ADS_COUNT);
createMap(ads);

// работа с картой
// скрываем элементы по дз
const mapFiltersContaner = document.querySelector('.map__filters');
mapFiltersContaner.classList.add('map__filters--disabled');

const mapFiltersElements = mapFiltersContaner.querySelectorAll('select, fieldset');
mapFiltersElements.forEach((value) => {
  value.classList.add('map__filters--disabled');
});

const adContainer = document.querySelector('.ad-form');
adContainer.classList.add('ad-form--disabled');

const adElements = adContainer.querySelectorAll('fieldset');
adElements.forEach((value) => {
  value.classList.add('ad-form--disabled');
});

