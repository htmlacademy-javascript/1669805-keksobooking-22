import { createMap } from './map.js'
import { getAds } from './data.js'
const SIMILAR_ADS_COUNT = 10;
const ads = getAds(SIMILAR_ADS_COUNT);
createMap(ads);

// работа с картой
// скрываем элементы по дз
const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('ad-form--disabled');
mapFilters.querySelectorAll('select, input').forEach((it) => it.disabled = true);

const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
adForm.querySelectorAll('fieldset').forEach((it) => it.disabled = true);
