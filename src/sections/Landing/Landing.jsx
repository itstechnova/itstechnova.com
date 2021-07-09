import React, { useState, useEffect } from "react";
import Typist from 'react-typist';
import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
import bridgeTile from "../../resources/images/graphics/bridge-tile.svg";
import chevron from "../../resources/images/icons/learn_more.svg"
import Button from "../../components/Button/Button";

const TextLoop = () => {
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <div>
            {mounted ? (
                <Typist className="landing-slogan" onTypingDone={() => setMounted(false)}>
                    <span><span className="landing-slogan-bold">{landing.prepare}</span>{landing.sloganEnd}</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span><span className="landing-slogan-bold">{landing.hack}</span>{landing.sloganEnd}</span>
                    <Typist.Backspace count={17} delay={800} />
                    <span><span className="landing-slogan-bold">{landing.connect}</span>{landing.sloganEnd}</span>
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
                    <h4 className="landing-logo-text">
                        <span className="landing-title">{landing.title1}</span>
                        {landing.title2}
                    </h4>
                    <h4 className="landing-logo-text-mobile" style={{alignItems: "flex-end", justifyContent: "center", gap: "5px"}} >
                        <img 
                            className="mlh-mobile"
                            style={{height: "18px", marginRight: "2px", marginBottom: "4px"}} 
                            alt="mlh logo"
                        />
                        • <span className="landing-title" style={{marginBottom: "1px"}}>{landing.title1}</span>
                        {landing.title2}
                    </h4>
                    <TextLoop />
                    <h4 className="landing-description-mobile">
                        {landing.description}
                    </h4>
                    <h4 className="landing-dates">{landing.dates}</h4>
                    <h4 className="landing-description">
                        {landing.description}
                    </h4>
                </div>
                <div className="landing-button-container">
                    <Button link={landing.appLink} label={landing.applyCTA} />
                    <Button link={landing.mentorAppLink} label={landing.mentorApplyCTA} type="button-2"/>
                </div>
                <div className="landing-button-container-mobile">
                    <Button link={landing.appLink} label={landing.applyCTAMobile} />
                    <Button link={landing.mentorAppLink} label={landing.mentorApplyCTAMobile} type="button-2"/>
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
