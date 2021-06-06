import React, { useState, useEffect } from "react";
import Typist from 'react-typist';
import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import socials from "../../resources/strings/socials";
import landing from "../../resources/strings/landing";
import bridgeTile from "../../resources/images/graphics/bridge-tile.svg";
import chevron from "../../resources/images/icons/learn_more.svg"

const TextLoop = () => {
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <div>
            {mounted ? (
                <Typist className="landing-slogan" onTypingDone={() => setMounted(false)}>
                    <span><span className="landing-slogan-bold">Prepare</span> With Us</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span><span className="landing-slogan-bold">Hack</span> With Us</span>
                    <Typist.Backspace count={17} delay={800} />
                    <span><span className="landing-slogan-bold">Connect</span> With Us</span>
                    <Typist.Backspace count={20} delay={800} />
                </Typist>
            ) : (
                <span className="landing-slogan">
                    {"n"}
                </span>
            )}
        </div>
    );

}

const Landing = () => {
    return (
        <SectionWrapper id="landing" paddingTop="0">
            <div className="landing-container">
                <div className="landing-text">
                    <h4>
                        <span className="landing-title">{landing.title1}</span>
                        {landing.title2}
                    </h4>
                    <TextLoop />
                    <div className="landing-description">
                        <h4>{landing.description}</h4>
                        <h4>{landing.dates}</h4>
                    </div>
                </div>
                <div className="landing-button-container">
                    <a className="button" href={socials.mailingList}>
                        {landing.applyCTA}
                    </a>
                </div>

                <div className="landing-graphic-container">
                    <img src={bridgeTile} alt="bridge tile" />
                </div>

                <div className="landing-learn-more-container">
                    <a href="#about" className="learn-more-link">Learn more
                    <img src={chevron} className="learn-more-arrow" alt="learn more" />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Landing;
