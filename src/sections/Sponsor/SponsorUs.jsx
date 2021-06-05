import React from "react";
//import Carousel from 'react-bootstrap/Carousel';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
//import Stories from "../../components/Stories/Stories";
import plantAndBee from "../../resources/images/graphics/plant-and-bee.svg";
import "./SponsorUs.scss";
import OurSponsors from "./OurSponsors";

const SponsorUs = () => (
    <SectionWrapper id="sponsor">
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
                    <Button label="Join as a Sponsor" link="mailto:sponsors@itstechnova.org" />
                </div>
                <div className="sponsor-us-images">
                    <img className="plant-and-bee" src={plantAndBee} alt="plant and bee" />
                </div>
            </div>
            <h2 className="sponsor-us-showcase"> </h2>
            {/*<Stories />*/}
            <OurSponsors />
        </div>
    </SectionWrapper>
);

export default SponsorUs;