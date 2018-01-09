import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className={props.type}>
      <h3>{props.time}</h3>
      <img src={props.image} />
      <h3>{props.temp}</h3>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  temp: PropTypes.string
};

export default Card;