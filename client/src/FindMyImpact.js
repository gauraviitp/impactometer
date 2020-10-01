import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import AppState from "./AppState";
import PieChart from "./PieChart";

const FindMyImpact = (props) => {
  const initState = AppState;

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
          <div className="row question">
            <div className="col-6">
              <h5 className="mt-3">{question.text}</h5>
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
            <div className="col-6">
              <PieChart
                id={question.id}
                options={question.options}
                selectedOption={Number(question.selectedOption) - 1}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindMyImpact;
