import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Slides } from "./components/slides";
import { List } from "./components/lists";
import { Button, IconLink } from './components/btn'
import "./App.css";

function App() {
  return (
    <Router basename="/scrum">
      <div className="App">
        <Switch>
          <Route path="/list" exact>
            <List />
          </Route>
          <Route path="/">
            <Slides />
          </Route>
          <Route>
            <section className="page">
              <div className="page-card">
                <h1 className="title">Not Found</h1>
                <Button to="/" text="Go Home" />
              </div>
            </section>
          </Route>
        </Switch>
        <IconLink to="/list" className="pinned"><span role="img" aria-label="Settings">⚙️</span></IconLink>
      </div>
    </Router>
  );
}

export default App;
