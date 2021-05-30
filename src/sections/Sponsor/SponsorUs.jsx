import React from "react";
//import Carousel from 'react-bootstrap/Carousel';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import bee from "../../resources/images/graphics/bee.svg";
import leaf from "../../resources/images/graphics/leaf.svg";
import "./SponsorUs.scss";

const SponsorUs = () => (
    <SectionWrapper id="sponsor-us">
        <div className="sponsor-us-container">
            <div className="sponsor-us-content">
                <div className="sponsor-us-text">
                    <h1 className="sponsor-us-title">Sponsor Us</h1>
                    <div className="sponsor-us-description">
                        <p>Support more than 200 young women in the next steps
                of their journey by sponsoring the next generation of leaders</p>
                        <p>Interested in sponsoring? Email us at{" "}
                            <a href="mailto:sponsors@itstechnova.org">sponsors@itstechnova.org</a>
                        </p>
                    </div>
                    <button className="button-smaller">Join as a Sponsor</button>
                </div>
                <div className="sponsor-us-images">
                    <img className="leaves" src={leaf} alt="leaves" />
                    <img className="bee" src={bee} alt="bee" />
                </div>
            </div>
            <h2 className="sponsor-us-showcase">Sponsor Showcase</h2>
        </div>
    </SectionWrapper>
);

export default SponsorUs;