import React from "react";
import "./Faq.css";
import Question from "./Question";
import info from "./info";

const Faq = () => {
  return (
    <div className="container">
      <h4>Frequently Asked Questions</h4>
      {info.map((item, index) => {
        return (
          <Question
            key={index}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Faq;
