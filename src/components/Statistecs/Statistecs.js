import React from 'react';

const Statistecs = ({ good, neutral, bad, set, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
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
