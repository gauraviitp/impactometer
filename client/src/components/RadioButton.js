import React from "react";

const RadioButton = (props) => {
  return (
    <div className="form-check">
      <input
        id={props.id}
        type="radio"
        className="form-check-input option"
        checked={props.checked}
        onChange={props.onSelection}
        value={props.value}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.labelText}
      </label>
    </div>
  );
};

export default RadioButton;
