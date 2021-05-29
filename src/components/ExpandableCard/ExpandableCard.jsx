import React from "react";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  return (
    <details className="card">
      <summary>
        <h1 className="question">{props.question}</h1>
        <i className="chevron-down"></i>
      </summary>
      <div className="answer">{props.children}</div>
    </details>
  );
};

export default ExpandableCard;
