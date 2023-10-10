import PropTypes from "prop-types";
import React from "react";
import { BlogIcon } from "./Icons/BlogIcon.js";
import { NotAvailable } from "./NotAvailable.js";

export const Blog = ({ blog }) => {
  const iconClass = "SocialIcon";
  return blog ? (
    <>
      <BlogIcon className={iconClass} />
      <a className="SocialLink" href={blog}>
        {blog}
      </a>
    </>
  ) : (
    <NotAvailable icon={<BlogIcon className={iconClass} />} />
  );
};

Blog.propTypes = {
  blog: PropTypes.string,
};
