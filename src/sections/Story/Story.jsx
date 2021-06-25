import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import wicsImg from "../../resources/images/logo/wics.svg";
import storyImg1 from "../../resources/images/Story1.svg";
import storyImg2 from "../../resources/images/Story2.svg";
import storyImg3 from "../../resources/images/Story3.svg";
import storyImg4 from "../../resources/images/Story4.svg";
import ourStoryStrings from "../../resources/strings/story";

import "./Story.scss";

var content = [
    {
        quote: ourStoryStrings.quote1Text,
        name: ourStoryStrings.quote1Name,
        role: ourStoryStrings.quote1Role,
        image: storyImg1,
    },
    {
        quote: ourStoryStrings.quote2Text,
        name: ourStoryStrings.quote2Name,
        role: ourStoryStrings.quote2Role,
        image: storyImg2,
    },
    {
        quote: ourStoryStrings.quote3Text,
        name: ourStoryStrings.quote3Name,
        role: ourStoryStrings.quote3Role,
        image: storyImg3,
    },
    {
        quote: ourStoryStrings.quote4Text,
        name: ourStoryStrings.quote4Name,
        role: ourStoryStrings.quote4Role,
        image: storyImg4,
    }
]

const Story = () => {
    const [state, setState] = useState({
        screenWidth: window.innerWidth,
    })

    const updateWindowDimensions = () => {
        setState({ ...state, screenWidth: window.innerWidth });
    }

    useEffect(() => {
        function handleResize() {
            updateWindowDimensions();
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (<SectionWrapper id="story">
        <div className="story-container">
            <h2 className="sub-title">{ourStoryStrings.title}</h2>
            <p className="sub-title-desc">{ourStoryStrings.description}</p>
            <Carousel content={content} type={CarouselTypes.story} />
            <h5 className="affiliated-title">{ourStoryStrings.affiliatedTitle}</h5>
            <div className="affiliation-wrapper-desktop">
                <img className="affiliation-image-desktop" alt="" src={wicsImg} />
                <div className="wics-desc">
                    <p>
                        {ourStoryStrings.wicsDescription}
                    </p>
                    <p>
                        <br /><a href="https://cs.uwaterloo.ca/wics" rel="noreferrer" target="_blank">Find out more about WiCS</a>
                    </p>
                </div>
            </div>
        </div>
    </SectionWrapper>)
}

export default Story;