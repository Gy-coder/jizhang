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
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Redirect to="Home" />

      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Layout>
      Home
    </Layout>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
