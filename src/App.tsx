import React from "react";
import "./index.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Money } from "./views/Money";
import { Statistics } from "./views/Statistics";
import { Chart } from "./views/Chart";
import { NoMatch } from "./views/NoMatch";
import { EditRecord } from "./views/EditRecord";

function App() {
  return (
    <HashRouter basename="/banana-bookkeeping-website">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/money" />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
          <Statistics />
        </Route>
        <Route path="/statistics/edit/:id" exact>
          <EditRecord />
        </Route>
        <Route path="/chart" exact>
          <Chart />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
