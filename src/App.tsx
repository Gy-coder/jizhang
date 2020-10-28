import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Layout} from './component/Layout';

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

function Money() {
  return (
    <Layout>
      Money
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      Statistics
    </Layout>
  );
}

function Chart() {
  return (
    <Layout>
      Chart
    </Layout>
  );
}

function NoMatch(){
  return (
    <>
     this page not exist
    </>
  )
}

export default App;
