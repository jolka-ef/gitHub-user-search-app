import PropTypes from "prop-types";
import React from "react";

export const NotAvailable = ({ icon }) => {
  return (
    <>
      <span className="notAvailable">{icon}</span>
      <span className="notAvailable"> Not Available</span>
    </>
  );
};

NotAvailable.propTypes = {
  icon: PropTypes.object,
};
