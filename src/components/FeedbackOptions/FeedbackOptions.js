import React from 'react';
import PropTypes from "prop-types"
import classes from "./FeedbackOptions.module.css"

const FeedbackOptions = function ({onLeaveFeedback}) {
  return (
    <div className={classes.contayner}>
      <button className={classes.button} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={classes.button} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={classes.button} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes={
onLeaveFeedback: PropTypes.func.isRequired
}
