import React from "react";
import "./OurSponsors.scss";
/*
import google from "../../resources/images/sponsors/silver/google.png";
import wish from "../../resources/images/sponsors/silver/wish.png";
*/
import scotiabank from "../../resources/images/sponsors/scotiabank.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";
import amazon from "../../resources/images/sponsors/amazon.png";
import hrt from "../../resources/images/sponsors/hrt.png";
import zynga from "../../resources/images/sponsors/zynga.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";
import expo from "../../resources/images/sponsors/expo.png";
import ratiocity from "../../resources/images/sponsors/ratiocity.png";
// import sps from "../../resources/images/sponsors/sps.png";

/*
import facebook from "../../resources/images/sponsors/bronze/facebook.png";
import splunk from "../../resources/images/sponsors/bronze/splunk.png";
*/
import wie from "../../resources/images/logo/wie.png";
import wics from "../../resources/images/logo/wics.png";

const OurSponsors = () => (
    <div className="our-sponsors-container">
        <h2 className="our-sponsors-title">Our Sponsors</h2>
        <div className="our-sponsors-logos">
            <div className="our-sponsors-gold">
                <a href="https://www.aboutamazon.com/" >
                    <img src={amazon} alt="Amazon" style={{width: "60%"}}/> 
                </a>
                <a href="https://www.cockroachlabs.com/careers/">
                    <img src={cockroach} alt="Cockroach Labs" />
                </a>
                {/* <a href="https://www.spscommerce.com/">
                    <img src={sps} alt="SPS Commerce" />
                </a> */}
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
            <div className="our-sponsors-silver">
                <a href="https://www.scotiabank.com/ca/en/about.html">
                    <img src={scotiabank} alt="Scotiabank" />
                </a>
                <a href="https://www.pagerduty.com/careers/">
                    <img src={pagerduty} alt="PagerDuty" style={{width: "80%"}}/>
                </a>
                {/*
                    <a href="https://about.google/">
                        <img src={google} alt="Google" />
                    </a>
                    <a href="https://www.wish.com/careers?hide_login_modal=true">
                        <img src={wish} alt="Wish" />
                    </a>
                    
                    */}
            </div>
            <div className="our-sponsors-bronze">
                <a href="https://www.cockroachlabs.com/careers/">
                        <img src={expo} alt="Expo" />
                </a>
                <a href="https://www.hudsonrivertrading.com/campus-recruiting/">
                    <img src={hrt} alt="hrt" style={{width: "80%"}} />
                </a>
                <a href="https://www.ratio.city/careers">
                        <img src={ratiocity} alt="Ratio.city" style={{width: "70%"}} />
                </a>
                <a href="https://www.zynga.com/jobs/careers/">
                    <img src={zynga} alt="zynga" />
                </a>
                
                {/*
                    <a href="https://about.facebook.com/">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.splunk.com/">
                        <img src={splunk} alt="splunk" />
                    </a>
                    */}
            </div>
        </div>
        <h2 className="our-sponsors-title">Our Partners</h2>
        <div className="our-sponsors-partners">
            <a href="https://cs.uwaterloo.ca/wics">
                <img src={wics} alt="wics" />
            </a>
            <a href="https://uwaterloo.ca/women-in-engineering/">
                <img src={wie} alt="wie" />
            </a>
        </div>
    </div>
);

export default OurSponsors;