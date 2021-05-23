import React from "react";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  return (
    <details className="card">
      <summary>
        <span className="question">{props.question}</span>
        <i className="chevron-down"></i>
      </summary>
      <div className="answer">{props.children}</div>
    </details>
  );
};

export default ExpandableCard;
