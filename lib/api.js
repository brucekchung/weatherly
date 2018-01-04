const key = 'bdf79fbe0e2610e8'
const root = `http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/`
//api.wunderground.com/api/bdf79fbe0e2610e8/conditions/forecast10day/hourly/q/CA/San_Francisco.json

function apiGet(url) { //translate response to .json()
  return fetch(url).then(response => response.json())
}

export default {
  getForecast(state, city) {
    return apiGet(`${root}${state}/${city}.json`)
  }
}

