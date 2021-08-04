import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import plantAndBee from "../../resources/images/graphics/plant-and-bee.svg";
import amazon from "../../resources/images/sponsors/amazon.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";
import sps from "../../resources/images/sponsors/sps.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";

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
    {
        quote: "SPS Commerce is the world’s leading retail network, connecting trading partners around the globe to optimize supply chain operations for all retail partners. We support data-driven partnerships with innovative cloud technology, customer-obsessed service and accessible experts so our customers can focus on what they do best. To date, more than 95,000 companies in retail, distribution, grocery and e-commerce have chosen SPS as their retail network. SPS has achieved 82 consecutive quarters of revenue growth and is headquartered in Minneapolis. For additional information, contact SPS at 866-245-8100 or visit www.spscommerce.com.",
        link: "https://www.spscommerce.com/",
        image: sps,
    },
    {
        quote: "PagerDuty is the digital operations management platform that empowers the right action, when seconds matter. For teams who build and run the digital systems that power business, PagerDuty is the best way to manage urgent, mission-critical work to keep operations running smoothly, without disruption of customer experiences. Over 40% of the Fortune 500 place PagerDuty at the center of their digital infrastructure to manage unplanned tasks, events, or opportunities. With more than 1,000 employees across offices in San Francisco, Atlanta, Toronto, Sydney, and London, PagerDuty is helping modern enterprises redefine their approach to operations in a digital-first world.",
        link: "https://www.pagerduty.com/",
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
            <h2 style={{marginTop:"24px"}}>Sponsor Showcase</h2>
            <div className="sponsor-us-showcase">
                {<Carousel content={showcase} type={CarouselTypes.sponsor} />}
            </div>            
            <OurSponsors />
        </div>
    </SectionWrapper>
);

export default SponsorUs;