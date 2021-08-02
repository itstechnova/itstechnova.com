import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import plantAndBee from "../../resources/images/graphics/plant-and-bee.svg";
import amazon from "../../resources/images/sponsors/amazon.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";

import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";

var showcase = [
    {
        quote: "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
        link: "https://www.amazon.jobs/student-programs",
        image: amazon,
    },
    {
        quote: "Cockroach Labs is a company building CockroachDB, a distributed SQL database that helps you build cloud-native apps that survive everything and thrive everywhere -- just like a cockroach!",
        link: "https://www.cockroachlabs.com/careers/",
        image: cockroach,
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
            <h2 style={{marginTop:"24px"}}>Sponsor Showcase</h2>
            <div className="sponsor-us-showcase">
                {<Carousel content={showcase} type={CarouselTypes.sponsor} />}
            </div>            
            <OurSponsors />
        </div>
    </SectionWrapper>
);

export default SponsorUs;