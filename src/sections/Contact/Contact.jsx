import React from "react";
import { useState } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Contact.scss";
import arrow from "../../resources/images/icons/submit.svg";
import contactImage from "../../resources/images/contact.svg";
import mail from "../../resources/images/socials/mailFill.svg";
import ig from "../../resources/images/socials/igFill.svg";
import linkedin from "../../resources/images/socials/linkedinFill.svg";
import facebook from "../../resources/images/socials/facebookFill.svg";
import twitter from "../../resources/images/socials/twitterFill.svg";
import contact from "../../resources/strings/contact";

function Contact() {

    const [state, setState] = useState({
        email: null
    })

    async function submitEmail() {
        
        const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUCqXqrW53nkw3xM5MDDjreqfnCNYGuIMcZZe_EvKZItrgiw/formResponse`

        const response = fetch(url, {
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                'access-control-allow-origin': '*',
            },
            "body": `entry.1170762674=${state.email}`
        })
        console.log(response);
        
    }

    return (
        <SectionWrapper id="contact">
            <div className="contact-container">
                <div className="contact-row">
                    <div className="contact">
                        <h2 className="sub-title">{contact.title}</h2>
                        <div className="email-wrapper">

                            <input className="email-input" onChange={e => setState({ ...state, email: e.target.value })} />
                            <div className="submit-wrapper" onClick={e => submitEmail()}>
                                <div className="wrapper">
                                    <img src={arrow} className="submit-btn" alt="email submit"/>
                                </div>
                            </div>

                        </div>

                        <div className="socials-row">
                            <img src={mail} alt="mail" />
                            <img src={ig} alt="ig" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                        </div>

                        <div className="links-row">
                            <a className="contact-links" href={contact.href1}>{contact.link1}</a>
                            <a className="contact-links" href={contact.href2}>{contact.link2}</a>
                            <a className="contact-links" href={contact.href3}>{contact.link3}</a>
                            <a className="contact-links" href={contact.href4}>{contact.link4}</a>
                        </div>

                    </div>
                    <img classname="contact-image" src={contactImage} alt="contact" />
                </div>

                <h2 className="team-title">Meet the Team</h2>


            </div>
        </SectionWrapper>
    );

}
export default Contact;