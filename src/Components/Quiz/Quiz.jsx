// import styles from "./Quiz.module.scss";
import React, { useState } from "react";

const Quiz = () => {
  const [message, setMessage] = useState(null);

  const callClickFunc = (event) => {
    const buttonId = event.target.id;
    if (buttonId === "secondButton") {
      setMessage(
        "Congratulation! Your answer is RIGHT!"
      );
    } else {
      setMessage(
        "Sorry! Your answer was WRONG! Try again!"
      );
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <h2>What is the capital of Iceland?</h2>
      <button id="firstButton" onClick={callClickFunc}>
        Copenhagen
      </button>
      <button id="secondButton" onClick={callClickFunc}>
        Reykjavik
      </button>
      <button id="thirdButton" onClick={callClickFunc}>
        Oslo
      </button>
      <button id="fourthButton" onClick={callClickFunc}>
        Stockholm
      </button>
      <div className="message">{message}</div>
    </>
  );
};

export default Quiz;
