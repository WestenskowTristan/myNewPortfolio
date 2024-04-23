import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, text, className }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
