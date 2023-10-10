import PropTypes from "prop-types";
import React from "react";

export const Button = (props) => {
  const { className, name, onClick, type, value } = props;
  return (
    <button className={className} onClick={onClick} type={type} value={value}>
      {name}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
