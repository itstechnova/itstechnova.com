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
            <h1 className="our-sponsors-title">Our Sponsors</h1>
            <div className="our-sponsors-logos">
                <div className="our-sponsors-silver">
                    <img src={google} alt="Google" />
                    <img src={wish} alt="Wish" />
                    <img src={scotiabank} alt="Scotiabank" />
                </div>
                <div className="our-sponsors-bronze">
                    <img src={amazon} alt="Amazon" />
                    <img src={facebook} alt="facebook" />
                    <img src={hrt} alt="HRT" />
                    <img src={splunk} alt="Splunk" />
                    <img src={zynga} alt="Zynga" />
                </div>
            </div>



        </div>

    </SectionWrapper>
);

export default OurSponsors;