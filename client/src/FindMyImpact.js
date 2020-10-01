import React, { useState } from "react";
import RadioButton from "./components/RadioButton";

const FindMyImpact = (props) => {
  const [state, setState] = useState({ selection: false });

  const onSelection = (event) => {
    setState({ selection: event.target.value });
  };

  return (
    <div className="container-fluid mt-5">
      <h2>Find My Impact </h2>
      <h4 className="mt-3">Question 1</h4>
      <RadioButton
        id="1"
        onSelection={onSelection}
        checked={state.selection === "1"}
        labelText="option 1"
        value="1"
      />
      <RadioButton
        id="2"
        onSelection={onSelection}
        checked={state.selection === "2"}
        labelText="option 2"
        value="2"
      />
    </div>
  );
};

export default FindMyImpact;
