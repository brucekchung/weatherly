const key = 'bdf79fbe0e2610e8';
const root = 
`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/`;

function apiGet(url) {
  return fetch(url).then(response => response.json());
}

export default {
  getForecast(state, city) {
    return apiGet(`${root}${state}/${city}.json`);
  }
};

