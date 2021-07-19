import React from "react";
import { useState, useEffect, useRef } from 'react';
import "./Carousel.scss";
import speechBackground from "../../resources/images/speechBubble.svg";
import speechBackgroundMobile from "../../resources/images/speechPoint2.svg";
import controlLeftLight1 from "../../resources/images/icons/control-left-light-1.svg";
import controlRightLight1 from "../../resources/images/icons/control-right-light-1.svg";

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
    });
    return isIntersecting;
}

export const CarouselTypes = {
    sponsor: "sponsor",
    story: "story",
}

export const Carousel = ({ content, type }) => {
    const autoPlayRef = useRef()
    var ref = useRef();
    const intervalRef = useRef(0);
    const isVisible = useIntersection(ref);
    const [currentSlide, setcurrentSlide] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [resetTimer, setResetTimer] = useState(true);

    const updateWindowDimensions = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
        return () => {
            window.removeEventListener("resize", updateWindowDimensions)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        if (resetTimer) {
            const play = () => {
                clearTimeout(intervalRef.current);
                autoPlayRef.current();
            }
            if (isVisible && resetTimer) {
                clearTimeout(intervalRef.current);
                intervalRef.current = setTimeout(play, 7000);
                setResetTimer(false);
            }
            return () => {
                if (isVisible) {
                    //clearTimeout(timer);
                }
            }
        }
    }, [isVisible, resetTimer]);

    const nextSlide = () => {
        setResetTimer(true);
        const newSlide = currentSlide + 1 >= content.length ? 0 : currentSlide + 1;
        setcurrentSlide(newSlide);
    };

    const prevSlide = () => {
        setResetTimer(true);
        const newSlide = currentSlide - 1 < 0 ? content.length - 1 : currentSlide - 1;
        setcurrentSlide(newSlide);
    };

    const SpeechBubble = () => (
        <div className="carousel-speech-bubble">
            {screenWidth && screenWidth <= 900
                ? <img className="carousel-background-bubble2" alt="" src={speechBackgroundMobile} />
                : <img className="carousel-background-bubble" alt="" src={speechBackground} />
            }
            <div className="carousel-text">
                <p>{content[currentSlide].quote}</p>
                <p className="carousel-quote-name-role">
                    {content[currentSlide].name}, {content[currentSlide].role}
                </p>
            </div>
        </div>
    );

    const SponsorBubble = () => (
        <div className="carousel-sponsor-bubble">
            <div className="carousel-sponsor-image-wrapper">
                <img className="carousel-sponsor-image" alt="" src={content[currentSlide].image} />
            </div>
            <div className="carousel-sponsor-text">
                <p>{content[currentSlide].quote}</p>
                <br />
                <div className="carousel-link-wrapper">
                    <a href={content[currentSlide].link}>Explore Career Page {'>'}</a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="carousel-wrapper" ref={ref} id="carousel">
            {type === CarouselTypes.story &&
                <img className="carousel-image" alt="" src={content[currentSlide].image} />
            }
            <div className="carousel-speech-wrapper">
                {type === CarouselTypes.story && <SpeechBubble />}
                {type === CarouselTypes.sponsor && <SponsorBubble />}

                <div className="carousel-controls-wrapper" >
                    <div className="carousel-progress-bar">
                        <div
                            id="carousel-progress-made"
                            style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
                        />
                    </div>
                    <p className="carousel-progress-score">
                        {`${currentSlide + 1} / ${content.length}`}
                    </p>
                    <div className="carousel-controls">
                        <img onClick={() => prevSlide()} src={controlLeftLight1} alt="" />
                        <img onClick={() => nextSlide()} alt="" src={controlRightLight1} />
                    </div>
                </div>

            </div>
        </div>
    );
};
