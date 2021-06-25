import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import plantAndBee from "../../resources/images/graphics/plant-and-bee.svg";
import scotiabank from "../../resources/images/sponsors/scotiabank.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";
import OurSponsors from "./OurSponsors";
import ourStoryStrings from "../../resources/strings/story";
import "./SponsorUs.scss";

var showcase = [
    {
        quote: ourStoryStrings.quote1Text,
        link: ourStoryStrings.quote1Name,
        image: scotiabank,
    },
    {
        quote: ourStoryStrings.quote2Text,
        link: ourStoryStrings.quote2Name,
        image: pagerduty,
    },
]


const SponsorUs = () => (
    <SectionWrapper id="sponsor">
        <div className="sponsor-us-container">
            <div className="sponsor-us-content">
                <div className="sponsor-us-text">
                    <h1 className="sponsor-us-title">Sponsor Us</h1>
                    <div className="sponsor-us-description">
                        <p>Support more than 250 young women+ in the next step of their journey in technology!</p>
                        <p>Interested in joining us as a sponsor? Email us at:{" "}
                            <a href="mailto:sponsors@itstechnova.org">sponsors@itstechnova.org</a>
                        </p>
                    </div>
                    <Button label="Join as a Sponsor" link="mailto:sponsors@itstechnova.org" />
                </div>
                <div className="sponsor-us-images">
                    <img className="plant-and-bee" src={plantAndBee} alt="plant and bee" />
                </div>
            </div>
            <h2>Sponsor Showcase</h2>
            <div className="sponsor-us-showcase">
                {<Carousel content={showcase} type={CarouselTypes.sponsor} />}
            </div>            
            <OurSponsors />
        </div>
    </SectionWrapper>
);

export default SponsorUs;