import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectOnePage from "./ProjectOnePage";
import ProjectTwoPage from "./ProjectTwoPage";
import ProjectThreePage from "./ProjectThreePage";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project-one">
            <ProjectOnePage />
          </Route>
          <Route exact path="/project-two">
            <ProjectTwoPage />
          </Route>
          <Route exact path="/project-three">
            <ProjectThreePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
