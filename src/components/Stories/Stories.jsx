import React from "react";
import { useState, useEffect, useRef } from 'react';
import "./Stories.scss";
import storyImg1 from "../../resources/images/Story1.svg";
import storyImg2 from "../../resources/images/Story2.svg";
import storyImg3 from "../../resources/images/Story3.svg";
import storyImg4 from "../../resources/images/Story4.svg";
import speechBackground from "../../resources/images/speechBubble.svg";
import speechBackgroundMobile from "../../resources/images/speechPoint2.svg";
import controlLeftLight1 from "../../resources/images/icons/control-left-light-1.svg";
import controlLeftDark from "../../resources/images/icons/control-left-dark-1.svg";
import controlRightLight1 from "../../resources/images/icons/control-right-light-1.svg";
import controlRightDark from "../../resources/images/icons/control-right-dark-1.svg";
import ourStoryStrings from "../../resources/strings/story";

const useIntersection = (ref) => {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isIntersecting
}

var storyInfo = {
  "1": {
    quote: ourStoryStrings.quote1Text,
    name: ourStoryStrings.quote1Name,
    role: ourStoryStrings.quote1Role,
    image: storyImg1,
  },
  "2": {
    quote: ourStoryStrings.quote2Text,
    name: ourStoryStrings.quote2Name,
    role: ourStoryStrings.quote2Role,
    image: storyImg2,
  },
  "3": {
    quote: ourStoryStrings.quote3Text,
    name: ourStoryStrings.quote3Name,
    role: ourStoryStrings.quote3Role,
    image: storyImg3,
  },
  "4": {
    quote: ourStoryStrings.quote3Text,
    name: ourStoryStrings.quote3Name,
    role: ourStoryStrings.quote3Role,
    image: storyImg4,
  }
}

function Stories () {
  const autoPlayRef = useRef()
  var ref = useRef();

  const isVisible = useIntersection(ref);
  console.log("isVisible:" + isVisible)

  const [state, setState] = useState({
    story: 1,
    quote: ourStoryStrings.quote1Text,
    name: ourStoryStrings.quote1Name,
    role: ourStoryStrings.quote1Role,
    image: storyImg1,
    screenWidth: window.innerWidth,
    mode: window.localStorage.getItem("mode"),
  })  
  

  console.log(window.localStorage.getItem("mode"))
  const updateWindowDimensions = () => {
    setState({...state, screenWidth: window.innerWidth});
}

const updateMode = () => {
  setState({...state, mode: window.localStorage.getItem("mode")});
}


useEffect (() => {
    function handleResize() {
        updateWindowDimensions();
    }
    
    function handleModeChange () {
      updateMode();
    }

    window.addEventListener("storage", handleModeChange);
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("storage", handleModeChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [state])

  
  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {

    const play = () => {
      autoPlayRef.current()
    }

    let interval = null

    if (isVisible) {
      interval = setInterval(play, 2000)
    }

    return () => {
      if (isVisible) {
        clearInterval(interval)
      }
    }
  }, [isVisible])

  

  const nextSlide = () => {
    var slide = state.story;
    var newSlide = String(slide + 1);
    if (slide+1 > 4) {
      newSlide = "1";
    }

    setState({...state, story: Number(newSlide), quote: storyInfo[newSlide].quote,
        name: storyInfo[newSlide].name,
        role: storyInfo[newSlide].role,
       image: storyInfo[newSlide].image})
  };

  const prevSlide = () => {
    var slide = state.story;
    var newSlide = String(slide - 1);
    if (slide-1 < 1) {
      newSlide = "1";
    }
    setState({...state, story: Number(newSlide), quote: storyInfo[newSlide].quote,
        name: storyInfo[newSlide].name,
        role: storyInfo[newSlide].role,
       image: storyInfo[newSlide].image})
  };


  //setInterval(nextSlide(state.story), 5000);

  var progessBar = document.getElementById("progress-made");
  const progressMade = (state.story /4) *100;
  console.log(progressMade);
  if (progessBar) {
    progessBar.style.width = `${progressMade}%`;
  }
  
  console.log("sreenwidth", state.screenWidth)


  return (
    <div>
    <div className="carosuel-wrapper" ref={ref} id="carosel">
    <img className="stories-image" alt="" src={state.image} />

    <div className="speech-wrapper">
      <div className="speech-bubble">
        {state.screenWidth &&state.screenWidth <=800 ? <img className="background-bubble2" alt="" src={speechBackgroundMobile} /> : <img className="background-bubble" alt="" src={speechBackground} />}
        <div className="bubble-text">
          <p>"{state.quote}"</p>
          <p className="quote-name-role">{state.name}, {state.role}</p>
        </div>
        
      </div>
      
      <div className="carosuel-controls-wrapper" >
        <div className="progress-bar">
          <div id="progress-made">
          </div>
        </div>

        <p className="progress-score">
            {state.story} / 4
        </p>
        <div className="controls">
          <img onClick={()=> prevSlide()} src={window.localStorage.getItem("mode") ==="light" ? controlLeftLight1 : controlLeftDark} alt="" />

          <img onClick={()=> nextSlide()} alt="" src={window.localStorage.getItem("mode") ==="light" ? controlRightLight1 : controlRightDark} />
        </div>
      </div>
    

    </div>
    </div>

    
    </div>
  );
};

export default Stories;