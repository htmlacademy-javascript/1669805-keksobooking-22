import {getAds} from './data.js';
import {openPopup} from './popup.js';


const SIMILAR_ADS_COUNT = 10;
const ads = getAds(SIMILAR_ADS_COUNT);
openPopup(ads[0]);

