import React, { useState } from "react";
import RadioButton from "./components/RadioButton";

const FindMyImpact = (props) => {
  const initState = {
    questions: [
      {
        id: "1",
        text: "Question 1",
        options: [
          { id: "1", text: "Option 1" },
          { id: "2", text: "Option 2" },
        ],
        selectedOption: "1",
      },
      {
        id: "2",
        text: "Question 2",
        options: [
          { id: "1", text: "Option 1" },
          { id: "2", text: "Option 2" },
        ],
        selectedOption: "1",
      },
    ],
  };

  const [state, setState] = useState(initState);

  const onSelection = (questionId, optionId) => {
    console.log(`${questionId}, ${optionId}`);
    const questions = [];
    for (let question of state.questions) {
      if (question.id === questionId) {
        questions.push(
          Object.assign({}, question, { selectedOption: optionId })
        );
      } else {
        questions.push(question);
      }
    }
    setState(Object.assign({}, state, { questions }));
  };

  return (
    <div className="container-fluid mt-5">
      <h2>Find My Impact </h2>
      {state.questions.map((question) => (
        <div key={question.id}>
          <h4 className="mt-3">{question.text}</h4>
          {question.options.map((option) => (
            <RadioButton
              id={`${question.id.toString()}-${option.id.toString()}`}
              key={`${question.id.toString()}-${option.id.toString()}`}
              onSelection={() => onSelection(question.id, option.id)}
              checked={question.selectedOption === option.id}
              labelText={option.text}
              value={option.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FindMyImpact;
