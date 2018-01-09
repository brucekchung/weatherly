import React from 'react';
import Card from './Card.js';
import './TenDay.scss';
import PropTypes from 'prop-types';

const TenDay = (props) => {
  let tenDay = props.forecast.forecast;

  return (
    <div className="ten">
      {
        props.forecast.forecast &&
        tenDay.simpleforecast.forecastday.map((item, index) => {
          return (<Card key={index}
                        type="ten-day"
                        time={item.date.weekday}
                        image={item.icon_url}
                        temp={`${item.high.fahrenheit}℉ 
                          / ${item.low.fahrenheit}℉`} />
          );
        })
      }
    </div>
  );
};

export default TenDay;

TenDay.propTypes = {
  key: PropTypes.number,
  type: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  temp: PropTypes.string
};