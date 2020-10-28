import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Money} from './views/Money';
import {Statistics} from './views/Statistics';
import {Chart} from './views/Chart';
import {NoMatch} from './views/NoMatch';


function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/money">
         <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="/chart">
          <Chart/>
        </Route>
        <Redirect to="money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}






export default App;
