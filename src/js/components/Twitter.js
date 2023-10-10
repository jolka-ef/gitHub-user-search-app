import PropTypes from "prop-types";

import React from "react";
import { NotAvailable } from "./NotAvailable.js";
import { TwitterIcon } from "./Icons/TwitterIcon.js";

export const Twitter = ({ twitter }) => {
  return twitter ? (
    <>
      <TwitterIcon className="SocialIcon" />
      <a className="SocialLink" href={`https://twitter.com/${twitter}`}>
        {twitter}
      </a>
    </>
  ) : (
    <NotAvailable icon={<TwitterIcon className="SocialIcon" />} />
  );
};

Twitter.propTypes = {
  twitter: PropTypes.string,
};
