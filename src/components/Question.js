import React, { useState } from "react";
import "./Question.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import info from "./info";

const Question = ({title, description}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="singleQuestion">
      <div className="question">
        <h5>{title}</h5>
        <button onClick={handleClick}>
          {showAnswer ? <FaMinusCircle/>: <FaPlusCircle/> }
        </button>
      </div>
      {showAnswer ? (
        <p className="answer">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default Question;
