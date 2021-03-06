import React from "react";

const MyImpact = (props) => {
  return (
    <div className="container myimpact">
      <div className="">
        <div className="row body">
          <div className="col-1"></div>
          <div className="col-sm-5">
            <div className="thank-you">
              Thank you for taking the time to understand your carbon footprint
            </div>
            <div className="carbon-footprint-label">
              Your carbon footprint, for the questions asked, is:
            </div>
            <div className="carbon-footprint-results">
              <div className="carbon-footprint-number">
                {props.carbonFootprint}
              </div>
              <div className="carbon-footprint-text">Kg CO2/YEAR</div>
              <div className="carbon-comparison">
                For the questions answered, thats{" "}
                <strong>{Math.round(Math.abs(props.percentageBetter))}%</strong>{" "}
                {props.percentageBetter <= 0 ? "better" : "worse"} than the
                average of SSE and OVO responses!
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <img
              className="result-image"
              src={props.image}
              alt="positive result"
            />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default MyImpact;
