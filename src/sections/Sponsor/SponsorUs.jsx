import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./SponsorUs.scss";

const SponsorUs = () => (
    <SectionWrapper id="sponsor-us">
        <div className="sponsor-us-container">
            <h2 className="sponsor-us-title">Sponsor Us</h2>
            <div className="sponsor-us-description">
                <p>Support more than 200 young women in the next steps
                of their journey by sponsoring the next generation of leaders</p>
                <p>Interested in sponsoring? Email us at {'\u00A0'}
                    <a href="mailto:sponsors@itstechnova.org">sponsors@itstechnova.org</a>
                </p>
            </div>
            <div className="sponsor-us-image"> </div> {/*TBD by design*/}
            <button className="sponsor-us-button">Join as a Sponsor</button>
            <div className="sponsor-us-showcase">Sponsor Showcase</div>

        </div>
    </SectionWrapper>
);

export default SponsorUs;