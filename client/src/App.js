import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindMyImpact from "./FindMyImpact";
import ImpactMeter from "./ImpactMeter";
import logo from "./logo.svg";
import "./App.css";
import "./index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/impact-o-meter" component={ImpactMeter} />
        <Route path="/find-my-impact" component={FindMyImpact} />
      </Switch>
    </Router>
  );
}

export default App;
