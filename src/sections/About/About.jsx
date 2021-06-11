import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import Button from "../../components/Button/Button";

const About = () => (
    <SectionWrapper id="about" >
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>{about.title}</h1>
                    <p>{about.description1}</p>
                </div>
            </div>
            <div className="about-events">
                <div style={{ gridArea: "prep-title" }}>
                    <h3>{about.prepareTitle}</h3>
                    <p>{about.prepareDates}</p>
                </div>
                <img className="prep-image" style={{ gridArea: "prep-image" }} src={prepareTile} alt="prepare-tile" />
                <div style={{ gridArea: "prep-caption"}} className="about-caption">
                    <p>{about.prepareCaption}</p>
                </div>
                <div style={{ gridArea: "hack-title" }}>
                    <h3>{about.hackTitle}</h3>
                    <p>{about.hackDates}</p>
                </div>
                <img className="hack-image" style={{ gridArea: "hack-image" }} src={hackTile} alt="hack-tile" />
                <div style={{gridArea: "hack-caption"}} className="about-caption">
                    <p>{about.hackCaption}</p>
                </div>
                <div style={{gridArea: "connect-title"}}>
                    <h3>{about.connectTitle}</h3>
                    <p>{about.connectDates}</p>
                </div>
                <img className="connect-image" style={{gridArea: "connect-image"}} src={connectTile} alt="connect-tile" />
                <div style={{gridArea: "connect-caption"}} className="about-caption">
                    <p>{about.connectCaption}</p>
                </div>
            </div >
            <div className="button-smaller-container">
                <Button link={about.scheduleLink} label={about.scheduleCTA} />
            </div>
        </div>
    </SectionWrapper >
);

export default About;
