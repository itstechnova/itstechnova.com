import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Story.scss";
import ourStoryStrings from "../../resources/strings/story";
import wieImg from "../../resources/images/logo/wie.svg";
import wicsImg from "../../resources/images/logo/wics.svg";
import Stories from "../../components/Stories/Stories";


const Story = () => (
    <SectionWrapper id="story">
        <div className="story-container">
            <h2 className="sub-title">{ourStoryStrings.title}</h2>
            <p className="sub-title-desc">{ourStoryStrings.description}</p>

            <Stories/>
            
            <h5 className="affiliated-title">{ourStoryStrings.affiliatedTitle}</h5>
            <div className="affiliation-wrapper">
                <div className="flip-card-wics">
                    <div className="flip-card-inner-wics">
                        <div className="wics-front">
                            <h5 className="affiliation-Title">{ourStoryStrings.wicsTitle}</h5>
                            <img className="affiliation-image" alt="" src={wicsImg}/>
                        </div>
                        <div className="wics-back">
                            <p className="wics-text">
                                {ourStoryStrings.wicsDescription}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flip-card-wie">
                    <div className="flip-card-inner-wie">
                        <div className="wie-front">
                            <h5 className="affiliation-Title">{ourStoryStrings.wieTitle}</h5>
                            <img className="affiliation-image" alt="" src={wieImg}/>
                        </div>
                        <div className="wie-back">
                            <p className="wie-text">
                                {ourStoryStrings.wieDescription}
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default Story;