import React from 'react';
import PropTypes from "prop-types"


const Notification = function ({message}) {
  return (
    <>
    <h2>{message}</h2>
    </>
  );
};
export default Notification
Notification.propTypes={
 message: PropTypes.string.isRequired
  }