import PropTypes from "prop-types";
import React from "react";
import { NotAvailable } from "./NotAvailable.js";
import { LocationIcon } from "./Icons/LocationIcon.js";
export const Location = ({ location }) => {
  return location ? (
    <>
      <LocationIcon className="SocialIcon" />
      <span className="SocialLink">{location}</span>
    </>
  ) : (
    <NotAvailable icon={<LocationIcon className="SocialIcon" />} />
  );
};

Location.propTypes = {
  location: PropTypes.string,
};
