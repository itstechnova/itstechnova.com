import React, { useState } from "react";
import expand from "../../resources/images/icons/expand_card.svg";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button onClick={() => setExpanded(!expanded)} className="card">
      <div className="summary">
        <h1 className="question">{props.question}</h1>
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
        <img
          src={expand}
          alt="expand card"
          className="faq-arrow"
          aria-expanded={expanded}
        />
      </div>
      <div className="answer-container" aria-expanded={!expanded}>
        <div className="answer">{props.children}</div>
      </div>
    </button>
  );
};

export default ExpandableCard;
