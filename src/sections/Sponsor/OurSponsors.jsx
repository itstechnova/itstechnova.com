import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./OurSponsors.scss";
import google from "../../resources/images/sponsors/silver/google.png";
import wish from "../../resources/images/sponsors/silver/wish.png";
import scotiabank from "../../resources/images/sponsors/silver/scotiabank.png";
import amazon from "../../resources/images/sponsors/bronze/amazon.png";
import facebook from "../../resources/images/sponsors/bronze/facebook.png";
import hrt from "../../resources/images/sponsors/bronze/hrt.png";
import splunk from "../../resources/images/sponsors/bronze/splunk.png";
import zynga from "../../resources/images/sponsors/bronze/zynga.png";


const OurSponsors = () => (
    <SectionWrapper id="our-sponsors">
        <div className="our-sponsors-container">
            <h2 className="our-sponsors-title">Our Sponsors</h2>
            <div>
                <img className="our-sponsors-silver" src={google} alt="Google"/>
                <img className="our-sponsors-silver" src={wish} alt="Wish"/>
                <img className="our-sponsors-silver" src={scotiabank} alt="Scotiabank"/>
            </div>
            <div> 
                <img className="our-sponsors-bronze" src={amazon} alt="Amazon"/>
                <img className="our-sponsors-bronze" src={facebook} alt="facebook"/>
                <img className="our-sponsors-bronze" src={hrt} alt="HRT"/>
                <img className="our-sponsors-bronze" src={splunk} alt="Splunk"/>
                <img className="our-sponsors-bronze" src={zynga} alt="Zynga"/>
            </div>
            
            
        </div>
       
    </SectionWrapper>
);

export default OurSponsors;