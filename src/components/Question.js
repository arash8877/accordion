import React, {useState} from "react";
import "./Question.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import info from './info'

const Question = () => {
   
   const [question, setQuestion] = useState({})

  return (
    <div className="singleQuestion">
      <div className="question">
        <p>What is react JS?</p>
        <button><FaPlusCircle/></button>
      </div>
      <div className="answer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipam nulla excepturi, est
          nemo delectus numquam magnam dolore, nam animi optio. Sed rem odio
          veniam suscipit quaerat doloribus eaque qui vitae, aut itaque eveniet
          et. Adipisci exercitationem, id eveniet laudantium minus nesciunt
          vitae similique nequ
        </p>
      </div>
    </div>
  );
};

export default Question;
