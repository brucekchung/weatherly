import key from './Key.js';

const root = 
`http://api.wunderground.com/api/${key.key}/conditions/forecast10day/hourly/q/`;

function apiGet(url) {
  return fetch(url).then(response => response.json());
}

export default {
  getForecast(state, city) {
    return apiGet(`${root}${state}/${city}.json`);
  }
};