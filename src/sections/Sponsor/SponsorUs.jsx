import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./SponsorUs.scss";

const SponsorUs = () => (
    <SectionWrapper id="sponsor-us">
        <div className="sponsor-us-container">
            <h2 className="sponsor-us-title">Sponsor Us</h2>
            <div className="sponsor-us-description">
                <p>Support more than 200 young women in the next steps
                of their journey by sponsoring the next generation of leaders</p>
                <p>Interested in sponsoring? Email us at {'\u00A0'}
                    <a href="mailto:sponsors@itstechnova.org">sponsors@itstechnova.org</a>
                </p>
            </div>
            <div className="sponsor-us-image"> </div> {/*TBD by design*/}

            <button className="sponsor-us-button">Join as a Sponsor</button>

            <div className="sponsor-us-showcase">Sponsor Showcase</div>
            
            <div className="sponsor-us-caroussel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../sponsors/facebook.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../sponsors/facebook.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../sponsors/facebook.png"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    </SectionWrapper>
);

export default SponsorUs;