import React from 'react';
import PropTypes from 'prop-types';


const Statistecs = ({ good, neutral, bad, set, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad:{bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p>Positive fedback:{positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistecs;
Statistecs.propTypes = {
  Good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};