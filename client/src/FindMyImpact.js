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
    <div className="container my-5">
      <div class="topbar"> </div>
      <h1 className="mb-5">Find My Impact </h1>
      <h3>This is some opening text </h3>
      {state.questions.map((question) => (
        <div key={question.id}>
          <div className="row question mt-3">
            <div className="col-sm-5">
              <h3>{question.text}</h3>
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
            <div className="col-sm-4">
              <PieChart
                id={question.id}
                options={question.options}
                selectedOption={Number(question.selectedOption) - 1}
              />
            </div>
            {question.selectedOption != "-1" ? (
              <>
                <div className="col-sm-3 pt-3">
                  <p>
                    Just so you know, average is{" "}
                    <strong>{question.average}</strong>.
                  </p>
                  <p>
                    Do you know, over the course of an year, it would amount to
                    creating{" "}
                    <strong>
                      {
                        question.options.find(
                          (o) => o.id === question.selectedOption
                        ).co2
                      }{" "}
                    </strong>
                    kg of CO2.
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            class="btn btn-warning btn-lg float-right"
            onclick="start()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindMyImpact;
