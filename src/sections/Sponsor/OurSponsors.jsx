import React from "react";
import "./OurSponsors.scss";
/*
import google from "../../resources/images/sponsors/silver/google.png";
import wish from "../../resources/images/sponsors/silver/wish.png";
import scotiabank from "../../resources/images/sponsors/silver/scotiabank.png";
*/
import amazon from "../../resources/images/sponsors/bronze/amazon.png";
/*
import facebook from "../../resources/images/sponsors/bronze/facebook.png";
import hrt from "../../resources/images/sponsors/bronze/hrt.png";
import splunk from "../../resources/images/sponsors/bronze/splunk.png";
import zynga from "../../resources/images/sponsors/bronze/zynga.png";
*/
import wie from "../../resources/images/logo/wie.svg";
import wics from "../../resources/images/logo/wics.svg";

const OurSponsors = () => (
    <div className="our-sponsors-container">
        <h2 className="our-sponsors-title">Our Sponsors</h2>
        <div className="our-sponsors-logos">
            <div className="our-sponsors-silver">
                <a href="https://www.aboutamazon.com/">
                    <img src={amazon} alt="Amazon" />
                </a>
                {/*
                    <a href="https://about.google/">
                        <img src={google} alt="Google" />
                    </a>
                    <a href="https://www.wish.com/careers?hide_login_modal=true">
                        <img src={wish} alt="Wish" />
                    </a>
                    <a href="https://www.scotiabank.com/ca/en/about.html">
                        <img src={scotiabank} alt="Scotiabank" />
                    </a>
                    */}
            </div>
            <div className="our-sponsors-bronze">
                {/*
                    <a href="https://www.aboutamazon.com/">
                        <img src={amazon} alt="Amazon" />
                    </a>
                    <a href="https://about.facebook.com/">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.hudsonrivertrading.com/">
                        <img src={hrt} alt="hrt" />
                    </a>
                    <a href="https://www.splunk.com/">
                        <img src={splunk} alt="splunk" />
                    </a>
                    <a href="https://www.zynga.com/">
                        <img src={zynga} alt="zynga" />
                    </a>
                    */}
            </div>
        </div>
        <h2 className="our-sponsors-title">Our Partners</h2>
        <div className="our-sponsors-partners">
            <a href="http://wics.uwaterloo.ca/">
                <img src={wics} alt="wics" />
            </a>
            <a href="https://uwaterloo.ca/women-in-engineering/">
                <img src={wie} alt="wie" />
            </a>
        </div>
    </div>
);

export default OurSponsors;