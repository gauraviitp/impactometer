import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import AppState from "./AppState";
import PieChart from "./PieChart";
import Footer from "./components/Footer";
import MyImpact from "./MyImpact";

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
        currentQuestionId:
          Number(questionId) == 14
            ? "14"
            : ((Number(questionId) + 1) % 15 == 0
                ? 1
                : (Number(questionId) + 1) % 15
              ).toString(),
      })
    );
  };

  const goToPrevious = () => {
    setState(
      Object.assign({}, state, {
        currentQuestionId: ((Number(state.currentQuestionId) - 1) % 15 == 0
          ? 14
          : (Number(state.currentQuestionId) - 1) % 15
        ).toString(),
      })
    );
  };

  const question = state.questions.find(
    (o) => o.id === state.currentQuestionId
  );

  const handleSubmit = () => {
    console.log("handle submit");
    let footprint = 0;
    console.log(state.questions);
    for (let question of state.questions) {
      if (question.selectedOption !== "-1") {
        let option = question.options.find(
          (o) => o.id === question.selectedOption
        );
        footprint += option.co2;
      }
    }

    let betterThan = Math.floor(Math.random() * 100 + 1);
    let image = "/images/positive-result.svg";

    if (betterThan <= 60 && betterThan > 40) {
      image = "/images/static-result.svg";
    }
    if (betterThan <= 40) {
      image = "/images/negative-result.svg";
    }

    setState(
      Object.assign({}, state, {
        carbonFootPrint: footprint,
        submitted: true,
        percentageBetterThan: betterThan,
        image,
      })
    );
  };

  return (
    <>
      <div className="header">
        <img className="logo" src="images/sse logo.png" alt="sse icon" />
      </div>
      <div className="body-background">
        <div className="container rectangle">
          {!state.submitted ? (
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
                  {Number(state.currentQuestionId) == state.questions.length ? (
                    <div
                      className="submit-button"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </div>
                  ) : (
                    <></>
                  )}
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
          ) : (
            <MyImpact
              image={state.image}
              percentageBetter={state.percentageBetterThan}
              carbonFootprint={state.carbonFootPrint}
            ></MyImpact>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindMyImpact;
