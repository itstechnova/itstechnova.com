import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";

import "./Contact.scss";
import arrow from "../../resources/images/icons/submit.svg";
import contactImage from "../../resources/images/contact.svg";
import mail from "../../resources/images/socials/mailFill.svg";
import ig from "../../resources/images/socials/igFill.svg";
import linkedin from "../../resources/images/socials/linkedinFill.svg";
import facebook from "../../resources/images/socials/facebookFill.svg";
import twitter from "../../resources/images/socials/twitterFill.svg";
import contact from "../../resources/strings/contact";
import socials from "../../resources/strings/socials";

function Contact() {

    const [state, setState] = useState({
        email: null,
        success: false,
        error: false,
        screenWidth: 0,
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
    }, [])

    //console.log(state.screenWidth)

    const validateEmailAddress = (email) => {
        const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
        const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
        const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
        return email.match(emailRegEx);
    };

    async function submitEmail() {
        console.log("here");
        const isValidEmail = state.email && validateEmailAddress(state.email);

        if (!isValidEmail) {
            setState({ ...state, error: true, success: false });
            setTimeout(() => { setState({ ...state, email: "", error: false }) }, 5000)
            return;
        }

        const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUCqXqrW53nkw3xM5MDDjreqfnCNYGuIMcZZe_EvKZItrgiw/formResponse`

        await fetch(url, {
            "method": "POST",
            "mode": "no-cors",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                'access-control-allow-origin': '*',
            },
            "body": `entry.1170762674=${state.email}`
        })
        setState({ ...state, email: "", success: true, error: false })
        setTimeout(() => { setState({ ...state, email: "", success: false }) }, 5000)
    }

    console.log(state);

    const contactInfo = () => {
        return (
            <div className="contact">
                <h1 className="sub-title">{contact.title}</h1>
                <div className="email-wrapper">
                {state.screenWidth >= 400 ? 
                <input className="email-input" placeholder="Enter your email to stay connected" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />
                : <input className="email-input" placeholder="Enter your email address" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />}
                    <div className="submit-wrapper" onClick={e => submitEmail()}>
                        <div className="wrapper">
                            <img src={arrow} className="submit-btn" alt="email submit" />
                        </div>
                    </div>
                </div>

                {state.success && <p> Thanks for signing up, we'll keep you updated!</p>}
                {state.error && <p> Please enter a valid email.</p>}
                <div className="socials-row">
                    <SocialMediaLink src={mail} link={socials.email} />
                    <SocialMediaLink src={ig} link={socials.instagram} />
                    <SocialMediaLink src={linkedin} link={socials.linkedin} />
                    <SocialMediaLink src={facebook} link={socials.facebook} />
                    <SocialMediaLink src={twitter} link={socials.twitter} />
                </div>

                {/* <div className="links-row">
                    <a className="contact-links" href={contact.href1}>{contact.link1}</a>
                    <a className="contact-links" href={contact.href2}>{contact.link2}</a>
                    <a className="contact-links" href={contact.href3}>{contact.link3}</a>
                    <a className="contact-links" href={contact.href4}>{contact.link4}</a>
                </div> */}

            </div>
        )
    }

    return (
        <SectionWrapper id="contact">
            <div className="contact-container">
                <div className="contact-row">
                    {contactInfo()}
                    <div className="contact-image-container">
                        <img alt="" src={contactImage} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );

}
export default Contact;