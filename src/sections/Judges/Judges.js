import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Judges.scss"
import judge1 from "../../resources/images/judges/judge1.svg"
import judge2 from "../../resources/images/judges/judge2.svg"
import judge3 from "../../resources/images/judges/judge3.svg"
import judge4 from "../../resources/images/judges/judge4.svg"
import judgeG from "../../resources/images/judges/judgeG.svg"


const JudgeCard = (props) => {
    const { photo} = props;

    return (
        <div className="judge-wrapper">
             <img
             alt=""
            src={photo.pic}
            className="judge-img"/>
            <h5 className="judge-name">{photo.name}</h5>
            <p className="judge-role">{photo.role}</p>
            <p className="judge-org">{photo.org}</p>
        </div>
       
    );
}

const judgeList = [
 {
        name: "Charlie Cheever",
        org: "Expo",
        pic: judge1,
        role: "CEO & Co-Founder"
    },
    {
        name: "Ketyurah Pinto",
        org: "Microsoft",
        pic: judge2,
        role: "Sr. Manager, Change Transformation"
    },
    {
        name: "Kasey McMaster",
        org: "SPS Commerce",
        pic: judge3,
        role: "Associate Business Analyst"
    },
    {
        name: "Nikki Riemersma",
        org: "SPS Commerce",
        pic: judge4,
        role: "Mgr II, Corporate Technology"
    },
    {
        name: "Charlotte Countryman",
        org: "SPS Commerce",
        pic: judgeG,
        role: "Application Engineer"
    }
]


const Judges = () => (
    <SectionWrapper id="judges">
        <h1 className="keynote-title">
            Judges
        </h1>
        <div className="judge-photos">
                {judgeList.map((info, index) => {
                    return (
                        <JudgeCard photo={info} id={index}/>
                    )
                })}
        </div>

        
    </SectionWrapper>
);

export default Judges;