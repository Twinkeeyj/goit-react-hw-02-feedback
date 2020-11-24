import React from 'react';
import PropTypes from 'prop-types';
import classes from "./Statistecs.module.css"


const Statistecs = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={classes.list}>
        <li>
          <p className={classes.good}>Good: {good}</p>
        </li>
        <li>
          <p className={classes.neutral}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={classes.bad}>Bad: {bad}</p>
        </li>
        <li>
          <p className={classes.total}>Total: {total}</p>
        </li>
        <li>
          <p className={classes.fedback}>Positive fedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistecs;
Statistecs.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};