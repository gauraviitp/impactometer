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
              Your carbon footprint is:
            </div>
            <div className="carbon-footprint-results">
              <div className="carbon-footprint-number">
                {props.carbonFootprint}
              </div>
              <div className="carbon-footprint-text">tonnes CO2/YEAR</div>
              <div className="carbon-comparison">
                Thats <strong>{props.percentageBetter}%</strong> better than the
                rest of SSE and OVO combined!
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
