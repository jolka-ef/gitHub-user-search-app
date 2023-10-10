import PropTypes from "prop-types";
import React from "react";
import { Blog } from "./Blog.js";
import { Company } from "./Company.js";
import { Location } from "./Location.js";
import { Twitter } from "./Twitter.js";
import { getCompanyName } from "../utils/getCompanyName.js";
import { getDate } from "../utils/getDate.js";

import "../../css/components/User.css";

export const User = ({ data }) => {
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    followers,
    following,
    location,
    login,
    name,
    public_repos,
    twitter_username: twitter,
  } = data;

  return (
    <>
      <section className="User">
        <img
          alt={`Github ${name ? name : login} image`}
          className="User-image"
          src={avatar_url}
        />

        <header className="User-intro">
          <h2 className="User-name"> {name ? name : login} </h2>
          <h3 className="User-login"> {`@${login}`} </h3>
          <time
            className="User-joinedDate"
            dateTime={created_at}
          >{`Joined ${getDate(created_at)}`}</time>
        </header>
        {bio ? (
          <p className="User-bio">{bio}</p>
        ) : (
          <p className="User-bio notAvailable"> This profile has no bio </p>
        )}
        <dl className="User-activity">
          <dt>Repos</dt>
          <dd>{public_repos} </dd>
          <dt>Following</dt>
          <dd> {following} </dd>
          <dt>Followers</dt>
          <dd> {followers} </dd>
        </dl>

        <footer className="Footer">
          <ul className="SocialList">
            <li className="SocialList-item">
              <Location location={location} />
            </li>
            <li className="SocialList-item">
              <Blog blog={blog} />
            </li>
            <li className="SocialList-item">
              <Twitter twitter={twitter} />
            </li>
            <li className="SocialList-item">
              <Company company={getCompanyName(company)} />
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
};

User.propTypes = {
  data: PropTypes.object,
};
