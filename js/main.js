import {getAds} from './data.js';

const SIMILAR_ADS_COUNT = 10;

alert(JSON.stringify(getAds(SIMILAR_ADS_COUNT)));
