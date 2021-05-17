import React from "react";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import "./Landing.scss";
import logo from "../../resources/images/logo/logo.png";
import facebook from "../../resources/images/socials/facebook.svg";
import instagram from "../../resources/images/socials/ig.svg";
import linkedin from "../../resources/images/socials/linkedin.svg";
import twitter from "../../resources/images/socials/twitter.svg";
import socials from "../../resources/strings/socials";
import landing from "../../resources/strings/landing";

const Landing = () => (
    <React.Fragment>
        <div className="landing-container" id="landing">
            <div className="landing-content">
                <img className="landing-logo" src={logo} alt="logo" />
                <span className="landing-title">{landing.title}</span>

                <span className="landing-slogan">
                    {landing.sloganPrepare}&nbsp;&nbsp;⭐&nbsp;&nbsp;{landing.sloganHack}
                    &nbsp;&nbsp;⭐&nbsp;&nbsp;{landing.sloganConnect}
                </span>

                <div className="landing-description">
                    <span>
                        {landing.description1} <br />
                    </span>
                    <span>{landing.description2}</span>
                    <span style={{ "font-weight": "bold" }}>
                        {landing.descriptionBolded}
                    </span>
                    <span>{landing.description3}</span>
                </div>

                <span className="landing-coming-soon">{landing.comingSoon}</span>

                <div className="button-container">
                    <a className="button" href={socials.mailingList}>
                        {landing.mailingListCTA}
                    </a>
                </div>

                <div className="socials">
                    <SocialMediaLink src={instagram} link={socials.instagram} />
                    <SocialMediaLink src={linkedin} link={socials.linkedin} />
                    <SocialMediaLink src={facebook} link={socials.facebook} />
                    <SocialMediaLink src={twitter} link={socials.twitter} />
                </div>
                <span>{landing.sponsor}</span>
                <span>
                    {landing.emailUs} <a href={socials.email}>{landing.email}</a>
                </span>
            </div>
        </div>
    </React.Fragment>
);

export default Landing;
