import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Slides } from "./components/slides";
import { List } from "./components/lists";
import { Button } from './components/btn'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/slides">
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
      </div>
    </Router>
  );
}

export default App;
