import key from './Key.js';

const root = 
`http://api.wunderground.com/api/${key.key}/conditions/forecast10day/hourly/q/`;

function apiGet(url) {
  return fetch(url).then(response => response.json());
}

export default {
  getForecast(city, state) {
    return apiGet(`${root}${state}/${city}.json`);
  }
};

//current error check is to see if props.forecast.for exists in header.js
//want to set state based on error

//return .json so 