import React from "react";
import expand from "../../resources/images/icons/expand_card.svg";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  return (
    <details className="card">
      <summary>
        <h1 className="question">{props.question}</h1>
        <img src={expand} className="faq-arrow" alt="expand card"/>
      </summary>
      <div className="answer">{props.children}</div>
    </details>
  );
};

export default ExpandableCard;
