import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Story.scss";
import ourStoryStrings from "../../resources/strings/story";
//import wieImg from "../../resources/images/logo/wie.svg";
import wicsImg from "../../resources/images/logo/wics.svg";
import Stories from "../../components/Stories/Stories";


function Story () {
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

            <Stories/>
            
            <h5 className="affiliated-title">{ourStoryStrings.affiliatedTitle}</h5>

            <div className="affiliation-wrapper-desktop"> 

            <img className="affiliation-image-desktop" alt="" src={wicsImg}/>

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