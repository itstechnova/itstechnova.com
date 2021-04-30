import React from "react";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import "./Landing.scss";

import facebook from "../../resources/images/socials/facebook-dark.svg";
import instagram from "../../resources/images/socials/ig-dark.svg";
import linkedin from "../../resources/images/socials/linkedin-dark.svg";
import email from "../../resources/images/socials/email-dark.svg";
import slack from "../../resources/images/socials/slack-dark.svg";
// import twitter from "../../resources/images/socials/twitter-dark.svg";
import socials from "../../resources/strings/socials";
import landing from "../../resources/strings/landing";

const Landing = () => (
  <React.Fragment>
    <div className="landing-container" id="landing">
      <div className="landing-content">
        <span className="title">{landing.title}</span>
        <div className="slogan">
          <span className="slogan-prepare">{landing.sloganPrepare} </span>
          <span className="slogan-hack">{landing.sloganHack} </span>
          <span className="slogan-connect">{landing.sloganConnect} </span>
        </div>
        <div className="socials">
          <SocialMediaLink src={email} link={socials.email} />
          <SocialMediaLink src={facebook} link={socials.facebook} />
          <SocialMediaLink src={instagram} link={socials.instagram} />
          <SocialMediaLink src={linkedin} link={socials.linkedin} />
          <SocialMediaLink src={slack} link={socials.twitter} />
        </div>
        <div className="button-container">
            <a className="button" href={socials.mailingList}>{landing.mail}</a>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Landing;
