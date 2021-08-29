import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Judges.scss"
import judge1 from "../../resources/images/judges/judge1.svg"
import judge2 from "../../resources/images/judges/judge2.svg"
import judge3 from "../../resources/images/judges/judge3.svg"
import judge4 from "../../resources/images/judges/judge4.svg"
import judge5 from "../../resources/images/judges/judge5.svg"
import judge6 from "../../resources/images/judges/judge6.svg"
import judge7 from "../../resources/images/judges/judge7.svg"
import judge8 from "../../resources/images/judges/judge8.svg"
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
    },
    {
        name: "Seema Bansal",
        org: "Microsoft",
        pic: judge5,
        role: "Program Manager"
    },
    {
        name: "Chloe Collins",
        org: "JP Morgan",
        pic: judgeG,
        role: "Software Engineer"
    },
    {
        name: "Shoma Sinha",
        org: "Concept",
        pic: judge6,
        role: "Partnerships Development Officer"
    },
    {
        name: "Rukmani Gopalan",
        org: "Microsoft",
        pic: judge7,
        role: "Principal PM Manager"
    },
    {
        name: "Mila Banerjee",
        org: "Concept",
        pic: judge8,
        role: "Business Advisor Deeptech - AI"
    },
    {
        name: "Cressa Price",
        org: "D2L",
        pic: judgeG,
        role: "Engineering Director"
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