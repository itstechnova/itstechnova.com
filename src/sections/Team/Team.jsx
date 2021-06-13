import React, { useState } from "react";
import "./Team.scss";

import alex from "../../resources/images/team/alex.jpg"
import alex2 from "../../resources/images/team/alex2.jpg"
import amyl from "../../resources/images/team/amyl.jpg"
import amyl2 from "../../resources/images/team/amyl2.jpg"
import amys from "../../resources/images/team/amys.jpg"
import amys2 from "../../resources/images/team/amys2.jpg"
import annette from "../../resources/images/team/annette.jpg"
import annette2 from "../../resources/images/team/annette2.jpg"
import annie from "../../resources/images/team/annie.jpg"
import annie2 from "../../resources/images/team/annie2.jpg"
import ayla from "../../resources/images/team/ayla.jpg"
import ayla2 from "../../resources/images/team/ayla2.jpg"
import bernie from "../../resources/images/team/bernie.png"
import bernie2 from "../../resources/images/team/bernie2.png"
import bonnie from "../../resources/images/team/bonnie.jpg"
import bonnie2 from "../../resources/images/team/bonnie2.jpg"
import brittney from "../../resources/images/team/brittney.jpeg"
import brittney2 from "../../resources/images/team/brittney2.jpg"
import caroline from "../../resources/images/team/caroline.jpg"
import caroline2 from "../../resources/images/team/caroline2.png"
import celine from "../../resources/images/team/celine.png"
import celine2 from "../../resources/images/team/celine2.jpg"
import faith from "../../resources/images/team/faith.jpeg"
import faith2 from "../../resources/images/team/faith2.jpeg"
import grace from "../../resources/images/team/grace.jpg"
import grace2 from "../../resources/images/team/grace2.jpg"
import jas from "../../resources/images/team/jas.jpg"
import jas2 from "../../resources/images/team/jas2.jpg"
import kaylee from "../../resources/images/team/kaylee.jpg"
import kaylee2 from "../../resources/images/team/kaylee2.jpg"
import kun from "../../resources/images/team/kun.jpg"
import kun2 from "../../resources/images/team/kun2.jpg"
import lucy from "../../resources/images/team/lucy.jpg"
import lucy2 from "../../resources/images/team/lucy2.jpeg"
import prianka from "../../resources/images/team/prianka.jpg"
import prianka2 from "../../resources/images/team/prianka2.jpg"
import sam from "../../resources/images/team/sam.jpg"
import sam2 from "../../resources/images/team/sam2.jpg"
import zoey from "../../resources/images/team/zoey.jpg"
import zoey2 from "../../resources/images/team/zoey2.png"

import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import linkedin from "../../resources/images/socials/linkedinFill.svg";

const photos = [
    { hot: alex, goof: alex2, name: "Alex Bray (she/her)", role: "Designer", linkedin: "https://www.linkedin.com/in/alex-bray-/" },
    { hot: amyl, goof: amyl2, name: "Amy Li (she/her)", role: "Logistics Coordinator", linkedin: "https://www.linkedin.com/in/aamyli/" },
    { hot: amys, goof: amys2, name: "Amy Shao (she/her)", role: "Engineering Lead", linkedin: "https://www.linkedin.com/in/amy-shao-/" },
    { hot: annette, goof: annette2, name: "Annette Le (she/her)", role: "Marketing Lead", linkedin: "http://linkedin.com/in/annettele/" },
    { hot: annie, goof: annie2, name: "Annie Zhou (she/her)", role: "Sponsorship Lead", linkedin: "https://www.linkedin.com/in/annie-zhou-08/" },
    { hot: ayla, goof: ayla2, name: "Ayla Orucevic (she/her)", role: "Co-Director, Founder", linkedin: "https://www.linkedin.com/in/ayla/" },
    { hot: bernie, goof: bernie2, name: "Bernadette Cheng (she/her)", role: "Sponsorship Coordinator", linkedin: "https://www.linkedin.com/in/bernadettecheng/" },
    { hot: bonnie, goof: bonnie2, name: "Bonnie Peng (she/her)", role: "Logistics Coordinator", linkedin: "https://www.linkedin.com/in/bonniepeng/" },
    { hot: brittney, goof: brittney2, name: "Brittney Cheng", role: "Designer", linkedin: "https://www.linkedin.com/in/brittney-cheng/" },
    { hot: caroline, goof: caroline2, name: "Caroline Chen (she/her)", role: "Co-Director, Founder", linkedin: "https://www.linkedin.com/in/itscarolinechen/" },
    { hot: celine, goof: celine2, name: "Celine Nguyen (she/her)", role: "Logistics Lead", linkedin: "https://www.linkedin.com/in/celineqnnguyen/" },
    { hot: faith, goof: faith2, name: "Faith Lum (she/her)", role: "Logistics Coordinator", linkedin: "https://www.linkedin.com/in/faithlum/" },
    { hot: grace, goof: grace2, name: "Grace Nguyen (she/her)", role: "Sponsorship Coordinator", linkedin: "https://www.linkedin.com/in/grace-nguyen-ba5028158/" },
    { hot: jas, goof: jas2, name: "Jasmine Bal (she/her)", role: "Program Manager, Founder", linkedin: "https://www.linkedin.com/in/jasminekbal/" },
    { hot: kaylee, goof: kaylee2, name: "Kaylee Ainsworth (she/they)", role: "Marketing Coordinator, Junior Designer", linkedin: "http://linkedin.com/in/kaylee-ainsworth/" },
    { hot: kun, goof: kun2, name: "Kun Zhu (she/her)", role: "Designer", linkedin: "https://www.linkedin.com/in/kun-zhu/" },
    { hot: lucy, goof: lucy2, name: "Lucy Shen (she/her)", role: "Finance Lead, Sponsorship Coordinator", linkedin: "https://www.linkedin.com/in/lucy-shen/" },
    { hot: prianka, goof: prianka2, name: "Prianka Hoque (she/her)", role: "Sponsorship Coordinator", linkedin: "https://www.linkedin.com/in/prianka-hoque/" },
    { hot: sam, goof: sam2, name: "Samantha Kaiser (she/her)", role: "Finance Coordinator, Logistics Coordinator", linkedin: "https://www.linkedin.com/in/samanthakaiser03/" },
    { hot: zoey, goof: zoey2, name: "Zoey Vu (she/her)", role: "Logistics Coordinator", linkedin: "https://www.linkedin.com/in/zoeyvu/" },
]

const PhotoCard = (props) => {
    const { photo, onHover, onUnhover } = props;
    const [imgSrc, setImgSrc] = useState(photo.hot);

    const handleHover = () => {
        setImgSrc(photo.goof);
        onHover && onHover();
    }

    const handleUnhover = () => {
        setImgSrc(photo.hot);
        onUnhover && onUnhover();
    }

    return (
        <img
            onMouseOver={() => handleHover()}
            onMouseOut={() => handleUnhover()}
            src={imgSrc}
            alt={photo.desc}
        />
    );
}

const Team = () => {
    const [id, setId] = useState(0);
    return (
        <div className="team-container">
            <div className="team-text">
                <h2>Meet the Team</h2>
                <div>
                    <SocialMediaLink src={linkedin} link={photos[id].linkedin} />
                    <p className="team-text-default">{photos[id].name} | {photos[id].role}</p>
                    <p className="team-text-mobile">{photos[id].name} <br /> {photos[id].role}</p>
                </div>

            </div>
            <div className="team-photos">
                {photos.map((photo, index) => {
                    return (
                        <PhotoCard photo={photo} id={index} onHover={() => setId(index)} />
                    )
                })}
            </div>
        </div>
    );
}

export default Team;
