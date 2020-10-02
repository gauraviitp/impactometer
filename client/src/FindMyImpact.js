import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import AppState from "./AppState";
import PieChart from "./PieChart";
import Footer from "./Footer";

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
    setState(
      Object.assign({}, state, {
        questions,
        currentQuestionId: ((Number(questionId) + 1) % 15).toString(),
      })
    );
  };

  const goToPrevious = () => {
    setState(
      Object.assign({}, state, {
        currentQuestionId: (
          (Number(state.currentQuestionId) - 1) %
          15
        ).toString(),
      })
    );
  };

  const question = state.questions.find(
    (o) => o.id === state.currentQuestionId
  );

  return (
    <>
      <div className="header">
        <img className="logo" src="images/sse logo.png" alt="sse icon" />
      </div>
      <div className="body-background">
        <div className="container rectangle">
          <div className="row">
            <div className="col-lg-6">
              <div className="question">
                <h3 className="group-text">{question.groupText}</h3>
                <h4 className="question-text">{question.text}</h4>
                <div className="option-group">
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
                <div
                  className="previous-question"
                  type="button"
                  onClick={goToPrevious}
                >
                  Previous question
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-section">
                <img className="image" src={question.image} alt="" />
                <div className="tip-heading">{question.tipHeading}</div>

                <div className="tip-text">{question.tipText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindMyImpact;
