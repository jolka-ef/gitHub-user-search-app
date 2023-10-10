import PropTypes from "prop-types";
import React from "react";
import { GithubIcon } from "./Icons/GithubIcon.js";
import { NotAvailable } from "./NotAvailable.js";

export const Company = ({ company }) => {
  return company ? (
    <>
      <GithubIcon className="SocialIcon" />
      <a className="SocialLink" href={`https://github.com/${company}`}>
        {company}
      </a>
    </>
  ) : (
    <NotAvailable icon={<GithubIcon className="SocialIcon" />} />
  );
};

Company.propTypes = {
  company: PropTypes.string,
};
